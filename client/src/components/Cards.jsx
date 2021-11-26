import React, { useEffect, useState } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getCountries } from "../actions";
import './Cards.css'

function Cards({ countries, getCountries }) {

  useEffect(() => {
  async function fetchData() {
    // You can await here
    await getCountries("");
  }
  fetchData();
  }, [])

  useEffect(()=>{

    //when you press the search button the number of countries is changed so that the current page becomes 1.
    if(countries.length<=pageNumberLimit && countries.length!==0){
      setCurrentPage(1)
    }
  },[countries])


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

 // dont see every page numbers
 const [pageNumberLimit, setpageNumberLimit] = useState(5)
 const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)


  //number of pages at bottom
  //           _
  // |Prev| |1|2|3|4|5| |Next|

  let pages = [];
  for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem= currentPage*itemsPerPage
  const indexOfFirsItem= indexOfLastItem-itemsPerPage
  const currentItems = countries.slice(indexOfFirsItem,indexOfLastItem)


  const handleClick = (e)=>{
    setCurrentPage(Number(e.target.id))
  }

  /// HANDLERS


  function handlerNextBtn(e) {
    //desable next page when no be more pages
    if(currentPage===pages[pages.length-1]) return 0
    setCurrentPage(currentPage +1)
    if (currentPage+1> maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit+ pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit+ pageNumberLimit)

    }

  }

  function handlerPrevBtn(e) {
    if(currentPage==pages[0]) return 0
    setCurrentPage(currentPage -1)

    if ((currentPage-1)%pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit- pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit- pageNumberLimit)

    }

  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit+1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={number==currentPage? 'active':null}>
          {number}

        </li>
      );

    }else {
      return null
    }

  });

  let pageIncrementBtn = null
  if (pages.length> maxPageNumberLimit) {
      pageIncrementBtn =  <li onClick={handlerNextBtn}>&hellip;</li>
  }

  let pageDecrementBtn = null
  if (pages.length> maxPageNumberLimit) {
      pageDecrementBtn =  <li onClick={handlerPrevBtn}>&hellip;</li>
  }


  return (
    <>
  <ul key="numberList" className="pageNumbers">
    <li>
      <button onClick={handlerPrevBtn}>Prev</button>
    </li>
    {/*|Prev| |1|2|3|4|5| |Next|*/}
    {pageDecrementBtn}
    {renderPageNumbers}
    {pageIncrementBtn}
    <li>
      <button onClick={handlerNextBtn}>Next</button>
    </li>
  </ul>
  {currentItems.length>0?currentItems.map((c) => {
    return (
      <Card
        name={c.name}
        continent={c.continent}
        flagImage={c.flagImage}
        ANID={c.ID} //Abbreviated name ID
        id={c.id}
        population={c.population_Size}
      />
    );
  }): <div>Not found</div>}
</>);
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getCountries: (name) => dispatch(getCountries(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
