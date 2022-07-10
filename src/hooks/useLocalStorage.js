import { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue) => {

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
    }, 2000 )
  }, [items] )



  const saveItems = (newItems) => {
    try {
      const stringifiedTodos = JSON.stringify(newItems)
      localStorage.setItem(itemName, stringifiedTodos)
      setItems(newItems)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return { items, saveItems, error, loading }
}

export { useLocalStorage };
