import { Link } from "react-router-dom";

const OrderPage = () => {
  /*
  const [order, setOrder] = useState({});
  let { orderId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = getUserData();
        const { data } = await getOrderById(currentUser.token, orderId);
        setOrder(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [orderId]);
*/
  return (
    <div className="md:my-5">
      <h1 className="text-base md:text-lg font-semibold mb-4">سفارش</h1>
      <div className="bg-clip-border rounded-lg bg-slate-50 text-slate-800 shadow-md w-full p-3 mb-5">
        <div className="flex items-center flex-wrap gap-y-2">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2"></div>
        </div>
      </div>

      <Link
        to="/admin-panel/orders"
        className="flex w-fit justify-center mb-4 rounded-md bg-slate-50 px-3 py-1.5 text-sm hover:font-semibold text-gray-900 shadow-sm hover:bg-lime-600 hover:text-slate-100 outline outline-1 outline-offset-1 outline-lime-600"
      >
        برگشت به صفحه سفارشات
      </Link>
    </div>
  );
};

export default OrderPage;
