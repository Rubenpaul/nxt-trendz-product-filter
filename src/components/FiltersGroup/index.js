import './index.css'

import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeInput,
    changeCategory,
    changeRating,
    clearFilters,
    searchProducts,
    titleSearch,
  } = props

  const onChangeInput = event => {
    changeInput(event)
  }

  const onClickSearch = event => {
    searchProducts(event)
  }

  const onClickChangeCategory = event => {
    changeCategory(event)
  }

  const onClickChangeRating = event => {
    changeRating(event)
  }

  const onClickClearFilters = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <form className="search-container" onSubmit={onClickSearch}>
        <input
          type="search"
          placeholder="Search"
          className="search-box"
          onChange={onChangeInput}
          value={titleSearch}
        />
        <button type="submit" className="submit-btn">
          <BsSearch className="search-icon" />
        </button>
      </form>
      <div className="filter-container">
        <h1 className="filter-heading">Category</h1>
        <div className="category-item-list">
          {categoryOptions.map(eachCategory => (
            <p
              className="category-item"
              key={eachCategory.categoryId}
              onClick={onClickChangeCategory}
              id={eachCategory.categoryId}
            >
              {eachCategory.name}
            </p>
          ))}
        </div>
      </div>

      <div className="filter-container">
        <h1 className="filter-heading">Rating</h1>
        <div className="rating-item-list">
          {ratingsList.map(eachRating => (
            <p className="rating-item" key={eachRating.ratingId}>
              <>
                <img
                  src={eachRating.imageUrl}
                  alt={`rating ${eachRating.ratingId}`}
                  className="rating-icon"
                  id={eachRating.ratingId}
                  onClick={onClickChangeRating}
                />
                <span className="rating-text">& up</span>
              </>
            </p>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="clear-filter-btn"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
