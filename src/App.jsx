// import React, { useEffect, useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Test from './components/Test';

function App() {  
  // const [TotalPrice, setTotalPrice] = useState(0);
  // const [AuctionData, setAuctionData] = useState([]);
  // const [FavoriteList, setFavoriteList] = useState([]);

  // console.log('upper',AuctionData);

  // useEffect(() => {
  //   fetch('/auction-data.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const updatedData = data.map(item => ({ ...item, isFavorite: false }));
  //       setAuctionData(updatedData);
  //     });
  // }, []);
  // // console.log(AuctionData);
  // const calculateTotalPrice = (favorites) => {
  //   const total = favorites.reduce((sum, item) => sum + parseFloat(item.currentBidPrice || 0), 0);
  //   setTotalPrice(total);
  // };

  // const handleFavorite = (id) => {
  //   const updatedData = AuctionData.map(item => {
  //     if (item.id === id) {
  //       item.isFavorite = true; 
  //     }
  //     return item;
  //   });
  //   setAuctionData(updatedData);

  //   const newFav = AuctionData.find(item => item.id === id);
  //   const updatedFavorites = [...FavoriteList, newFav];
  //   setFavoriteList(updatedFavorites);
  //   calculateTotalPrice(updatedFavorites);
  // };

  // const removeList = (id) => {
  //   const updatedData = AuctionData.map(item => {
  //     if (item.id === id) {
  //       item.isFavorite = false; 
  //     }
  //     return item;
  //   });
  //   setAuctionData(updatedData);

  //   const updatedFavorites = FavoriteList.filter(item => item.id !== id);
  //   setFavoriteList(updatedFavorites);
  //   calculateTotalPrice(updatedFavorites);
  // };


  // Calling All Data for Auction

  useEffect(()=>{
    fetch('/')
  },[])






  return (
    <>
      <Test></Test>
    </>
  );
}

export default App;
