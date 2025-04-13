import { CiHeart } from "react-icons/ci";
import FavoriteItems from '../FavoriteItems/FavoriteItems';

// {/* {FavoriteList.map(list => <p>{list.title} <button onClick={()=>removeList(list.id)} className="btn">X</button></p>)} */}

const Favorite = ({FavoriteList,removeList,TotalPrice,EnableBtn}) => { 

    const ToggleFav = FavoriteList.length
    // console.log(ToggleFav) 
    return (
        <div className='my-border rounded-xl my-light'>
            <div className="border-b text-white py-4 border-gray-600 flex gap-2 justify-center text-2xl items-center">
                <div>
                    <CiHeart className="text-red-500 text-3xl" />
                </div>
                <h1 className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Favorite Items</h1>
            </div> 



           {
            FavoriteList.length == 0 ? 
            <div className="py-10">
            <div className='text-center w-[240px] mx-auto'>
                    <h1 className='text-2xl opacity-80 mb-4'>No favorites yet</h1>
                    <p className='text-[.8rem] opacity-60 '>Click the heart icon on any item to add it to your favorites</p>
            </div>
        </div>
            
            : 
            
        <div className="">
            {FavoriteList.map(favlists => <FavoriteItems EnableBtn={EnableBtn} removeList={removeList} favlists={favlists}></FavoriteItems>)} 
        </div>
           }
                       <div className="border-t text-white py-4 border-gray-600 flex gap-2 justify-between px-5 text-xl items-center">
            <h1>Total bids Amount:</h1> 
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
           ${TotalPrice.toFixed(2)}         
            </div>
        </div> 
                     
        </div>
    );
};

// export default Favorite;