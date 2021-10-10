import React,{useState,useEffect, useRef} from 'react'
import './cartList.scss'
import { useGlobalContext } from '../context'
import {FiSearch} from 'react-icons/fi'
import Select from 'react-select'
import Pagination from './Pagination'


const customStyle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'grey',
        width: 'auto'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
    }),
    control: () => ({
        display: 'flex',
        border: '1px solid rgb(109, 109, 109)',
        borderRadius: '30px',
    }),
    menu: (provided) => ({
        ...provided,
        width: '250px',
        right: '0'
    })
}

const CartList = () => {
    const {articles,loading} = useGlobalContext();
    const [cartList, setCartList] = useState(articles);
    const [searchText, setSearchText] = useState('');
    //for select
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    //for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOffFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = cartList.slice(indexOffFirstPost, indexOfLastPost)

    const noCardRef = useRef(null);



    useEffect(() => {
        setCartList(articles);


        //all uniq object from articles
        const allUniqArticle = [...articles.reduce((map, obj) => map.set(obj.launch_year, obj), new Map()).values()];

        //pick value form uniq options
        const YearOptions = (allUniqArticle.map((item) => {
            return(
                {value: `${item.launch_year}`, label: `${item.launch_year}`, type: 'year'}
            )

        }));

        //option by success
        const successOption = [
            {value: true, label: 'success', type: 'success'},
            {value: false, label: 'failed', type: 'success'}
        ]
        //let grouped select options
        const groupedOptions = [
            {
                label: 'all',
                value: 'all',
                type: 'all'
            },
            {
                label: 'Years',
                options: YearOptions
            },
            {
                label: 'Launch Success',
                options: successOption
            }
        ]

        setOptions(groupedOptions);
        
        setCurrentPage(1);
    },[loading])

    //handling select filter
    useEffect(() => {
        if (selectedOption) {
            if (selectedOption.value === 'all') {
                setCartList(articles)
            }
            if (selectedOption.type === 'year') {
                setCartList(articles.filter(item => item.launch_year === selectedOption.value))
            }
            if (selectedOption.type === 'success') {
                setCartList(articles.filter(item => item.launch_success === selectedOption.value))
            }
        }
        //setCartList(articles.filter(item => item.rocket.rocket_name.toLowerCase().includes(searchText.toLocaleLowerCase())))
    },[selectedOption])

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredItem = articles.filter(item => item.rocket.rocket_name.toLowerCase().includes(searchText.toLocaleLowerCase()));
        setCartList(articles.filter(item => item.rocket.rocket_name.toLowerCase().includes(searchText.toLocaleLowerCase())));
        setSearchText('');
        if (filteredItem.length < 1) {
            noCardRef.current.style.display = 'block'
        } else{
            noCardRef.current.style.display = 'none'
        }

        setCurrentPage(1);
    }

    const handleSelect = (e) => {
        setSelectedOption(e);
        setCurrentPage(1);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    if (loading) {
        return(
            <div className="section">
                <h2 className='h2'>loading...</h2>
            </div>
        )
    }

    if (articles.length < 1) {
        return(
            <div className="section">
                <h2 className='h2'>Failed to Fetch Data.</h2>
            </div>
        )
    }
    return (
        <div className="cartlist-contaier section">
            <h2 className="heading">Flights</h2>
            <div className="cardList-heading">
                <div className="filter">
                    <Select menuPlacement="auto" menuPosition="fixed" dropdownIndicator="none" className="custom-select" style={customStyle} options={options} placeholder="filter" value={selectedOption} onChange={(e) => handleSelect(e)} />
                </div>
                <div className="card-search">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                        <button type="submit"><FiSearch /></button>
                    </form>
                </div>
            </div>
            <div style={{display: 'none'}} ref={noCardRef}><h2 className="h2">No match found</h2></div>
            <div className="cartList">
                {cartList && currentPosts.map((item,ind) =>{
                    return(
                        <div key={ind} className="card">
                            <div className="img-container">
                                <img src={item.links.mission_patch_small ? item.links.mission_patch_small : 'https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_960_720.png'} alt="" />
                            </div>
                            <div className="content">
                                <div className="flight-status">
                                    <span className="rocket-name">{item.rocket.rocket_name}</span>
                                    <span className={`success-btn ${item.launch_success ? 'success' : 'failed'}`}>{item.launch_success ? 'success' : 'failed'}</span>
                                </div>
                                <span className="date">{item.launch_year}</span>
                                <h2>{item.mission_name}</h2>
                                <p>{item.details && ((item.details).replace(/^(.{20}[^\s]*).*/, "$1") + "")}{item.details ? '...' : null}</p>
                                <a href={`${item.links.article_link}`} target="_blank" className="btn">Details</a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="pagination">
                <Pagination postPerPage={postPerPage} totalArticle={cartList.length} paginate={paginate} currentPage={currentPage}/>
            </div>
        </div>

    )
}

export default CartList
