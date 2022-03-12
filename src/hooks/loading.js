export default function useGetProducts(API) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch(API)
        .then((res) => res.json())
        .then((response) => {
          setProducts(response);
          setIsLoading(false);
        });
    }, []);
  
    return { products, isLoading };
  }