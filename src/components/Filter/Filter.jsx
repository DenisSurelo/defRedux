import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";


export default function Filter() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
}

Filter.propTypes = {
  
};
