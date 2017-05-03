import React from 'react'
import FilterItem from './FilterItem'

const Filter = () => (
  <p>
    Show:
    {" "}
    <FilterItem filter="SHOW_ALL">
      All
    </FilterItem>
    {", "}
    <FilterItem filter="SHOW_ACTIVE">
      Active
    </FilterItem>
    {", "}
    <FilterItem filter="SHOW_COMPLETED">
      Completed
    </FilterItem>
  </p>
)

export default Filter
