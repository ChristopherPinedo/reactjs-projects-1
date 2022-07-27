import { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue, time) => {

  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  const [ items, setItems ] = useState(initialValue)

  useEffect( () => {
    setTimeout( () => {
      try {
        const localStorageItems = localStorage.getItem(itemName)
        let parsedItems;

        if (localStorageItems) {
          parsedItems = JSON.parse(localStorageItems)
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = initialValue;
        }
        setItems(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }, time )
  }, [items] )


  const saveItems = (newItems) => {
    try {
      const stringifiedItems = JSON.stringify(newItems)
      localStorage.setItem(itemName, stringifiedItems)
      setItems(newItems)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return { items, saveItems, error, loading }
}

export { useLocalStorage };
