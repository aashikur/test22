// import React, { useEffect, useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Test from './components/Test';
import { FaV } from 'react-icons/fa6';

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
// ===============================================================================================================================================================
  // {
  //   "id": 2,
  //   "title": "Antique Pocket Watch",
  //   "description": "Classic mechanical pocket watch from the early 1900s.",
  //   "currentBidPrice": 310.00,
  //   "timeLeft": "5h 10m",
  //   "bidsCount": 22,
  //   "image": "https://i.ibb.co.com/nNC17Syw/Bid2-min.png"
  // },

const FavRemove = (id) => {
  console.log(id) 
  const updateFavList = FavoriteList.filter(item => item.id !== id)
  setFavoriteList(updateFavList)
  TotalFavoriteAmount(updateFavList)

  const updateAuctionData = AuctionData.map(item => {
    if(item.id == id) {
      item.isFav = true 
    } 
    return item;
  }) 

  setAuctionData(updateAuctionData);

}

  const heartButton = (id) => { 
    // console.log('heart button',id) 

 
    const updateData = AuctionData.map(item => {
      if(item.id == id) {
        item.isFav = false
      } 
      return item;
    })
    setAuctionData(updateData)
    
    const updateFavList = AuctionData.filter(item => item.id == id);
    const UpdatedFavList = [...FavoriteList, ...updateFavList];
    
    setFavoriteList(UpdatedFavList);
    TotalFavoriteAmount(UpdatedFavList)

  }

  


  const [AuctionData,setAuctionData] = useState([]); 
  const [FavoriteList,setFavoriteList] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0)


  useEffect(()=>{
    fetch('/auction-data.json')
      .then(res => res.json())
      .then(data => {
        const UpdateAuctionData = data.map(item => ({ ...item, isFav:true }))
        const againUpdata = UpdateAuctionData.map(item => ({...item,isNew:true}))
        setAuctionData(againUpdata)
      })
  },[])

  
  const TotalFavoriteAmount = (FavoriteList)=>{
    let sum = 0;

    FavoriteList.forEach(item => {
      sum+= parseFloat(item.currentBidPrice)  
    });      

    setTotalPrice(sum)
  }
  
  // FavoriteList.map(item => console.log(item.title))

  // useEffect(()=>{
  //   console.log(AuctionData[0])
  // },[AuctionData])

  return (
    <>
      {/* <div className='sticky w-2/5 mx-auto  top-0 bg-red-950 text-center py-y'> 
      {
        FavoriteList.map(item=><p>{item.title}</p>)
      }
      </div> */}
      
      <Test FavRemove={FavRemove}  FavoriteList={FavoriteList} TotalPrice={TotalPrice} heartButton={heartButton} AuctionData={AuctionData}></Test>

    </>
  );
}

export default App;
