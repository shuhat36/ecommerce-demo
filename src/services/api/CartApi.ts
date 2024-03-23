import { ICartData } from "../../interfaces";



export async function postCartData(cartData:ICartData) {
    try {
      const response = await fetch('https://fakestoreapi.com/carts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to post cart data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error posting cart data:', error);
      throw error;
    }
  }
  