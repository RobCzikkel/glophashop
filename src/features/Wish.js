import React from 'react';
import JSONPretty from 'react-json-pretty';
import { useSelector } from 'react-redux';

export default function Wish() {

  const wishList = useSelector((state) => state.wishlist.items);
  
  return (
    <div>
      <JSONPretty id="json-pretty" data={wishList}></JSONPretty>
    </div>
  )
}
