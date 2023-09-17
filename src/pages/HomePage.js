import { Link } from "react-router-dom";
import homePageHeroBg1 from "../assets/img/home-page-hero-bg-1-min.png";
import homePageHeroBg2 from "../assets/img/home-page-hero-bg-2-min.png";
import homePageHeroBg3 from "../assets/img/home-page-hero-bg-3-min.png";
import { SwiperSlider, SwiperSlide } from "../components/common/Swiper";
import ProductCard from "../components/productCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productServices";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProducts();
        const recentProducts = [...data].sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        setProducts(recentProducts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <section className="container mx-auto px-6 md:px-3 mb-8 md:mb-6">
        <div className="flex flex-col-reverse md:flex-row items-center flex-wrap lg:mx-24">
          <div className="w-full md:w-1/2">
            <h2 className="font-semibold text-2xl md:text-4xl mb-8">
              در کمترین زمان، عمیق یاد بگیرید
            </h2>
            <p className="mb-10 md:w-4/5 text-justify">
              به دریاد خوش آمدید، در دُریاد با آموزش اصولی و پروژه محور
              تجربیاتمون را در اختیارتون قرار می دهیم تا بتوانید در زمانی کم تر
              مسیر را طی کرده و به بازار کار وارد شوید .
            </p>
            <Link
              to={"/courses"}
              className="w-fit rounded-md bg-lime-600 px-3 py-2  mb-4 text-sm font-semibold text-gray-100 shadow-sm hover:bg-lime-500"
            >
              مشاهده دوره ها
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="mx-auto"
              src={homePageHeroBg1}
              alt="hero background"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 md:px-3 mb-10 bg-gradient-to-t from-lime-200 rounded-b-[40%] md:rounded-b-[50%]">
        <div className="container mx-auto lg:px-10 pb-10 flex flex-wrap">
          <div className="w-1/2 md:w-1/4 flex flex-col items-center justify-center mb-6 md:mb-12">
            <svg
              className="w-1/4 mb-4"
              viewBox="0 0 80 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="70" r="7" fill="#A3E635" />
              <circle cx="63.5" cy="16.5" r="16.5" fill="#A3E635" />
              <path
                d="M14.2 31.2866C13.2832 37.7788 12.7368 44.3112 12.5633 50.8566C22.1593 54.5644 31.3472 59.1179 40 64.4541C48.6539 59.1177 57.8429 54.5642 67.44 50.8566C67.2664 44.3112 66.72 37.7788 65.8033 31.2866M65.8033 31.2866C68.72 30.3801 71.6767 29.5415 74.6633 28.7768C63.7852 21.7229 52.1733 15.6908 40 10.7701C27.8266 15.6918 16.2147 21.725 5.33667 28.7799C8.31428 29.5402 11.2687 30.3761 14.1967 31.2866C23.0922 34.0528 31.7231 37.4995 40 41.5911C48.2758 37.4997 56.909 34.053 65.8033 31.2866ZM22.5 46.2501C23.163 46.2501 23.7989 46.0064 24.2678 45.5727C24.7366 45.1391 25 44.5509 25 43.9376C25 43.3242 24.7366 42.7361 24.2678 42.3024C23.7989 41.8687 23.163 41.6251 22.5 41.6251C21.837 41.6251 21.2011 41.8687 20.7322 42.3024C20.2634 42.7361 20 43.3242 20 43.9376C20 44.5509 20.2634 45.1391 20.7322 45.5727C21.2011 46.0064 21.837 46.2501 22.5 46.2501ZM22.5 46.2501V34.9188C28.1558 31.6669 33.9977 28.7005 40 26.0326M16.6433 61.6451C18.5032 59.929 19.9781 57.8897 20.9832 55.6445C21.9883 53.3994 22.5038 50.9926 22.5 48.5626V43.9376"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-sm md:text-base font-semibold">
              یادگیری حرفه ای
            </span>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-center justify-center mb-6 md:mb-12">
            <svg
              className="w-1/4 mb-4"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="70" r="7" fill="#A3E635" />
              <circle cx="60.5" cy="16.5" r="16.5" fill="#A3E635" />
              <g clipPath="url(#clip0_239_61)">
                <path
                  d="M65.6531 13.0408H40.7347V10.3469C40.7347 9.60302 40.1317 9 39.3878 9H28.6122C27.8683 9 27.2653 9.60302 27.2653 10.3469V13.0408H2.34694C1.60302 13.0408 1 13.6438 1 14.3878V19.7755C1 20.5194 1.60302 21.1224 2.34694 21.1224H3.69388V61.5306C3.69388 62.2745 4.2969 62.8776 5.04082 62.8776H29.2857V73.6531C29.2857 74.397 29.8887 75 30.6327 75H37.3673C38.1113 75 38.7143 74.397 38.7143 73.6531V62.8776H62.9592C63.7031 62.8776 64.3061 62.2745 64.3061 61.5306V21.1224H65.6531C66.397 21.1224 67 20.5194 67 19.7755V14.3878C67 13.6438 66.397 13.0408 65.6531 13.0408ZM29.9592 11.6939H38.0408V13.0408H29.9592V11.6939ZM36.0204 72.3061H31.9796V62.8776H36.0204V72.3061ZM61.6122 60.1837H6.38776V21.1224H61.6122V60.1837ZM64.3061 18.4286H3.69388V15.7347H64.3061V18.4286Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M31.0021 46.4741L28.6122 48.8542L26.2223 46.4741L24.3214 48.383L26.7033 50.7551L24.3214 53.1272L26.2223 55.0361L28.6122 52.656L31.0021 55.0361L32.903 53.1272L30.5211 50.7551L32.903 48.383L31.0021 46.4741Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M24.8774 36.1908L27.2654 33.8029L29.6534 36.1908L31.5582 34.2859L29.1703 31.8979L31.5582 29.5101L29.6534 27.6051L27.2654 29.993L24.8774 27.6051L22.9725 29.5101L25.3604 31.8979L22.9725 34.2859L24.8774 36.1908Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M37.0157 36.1888L39.3878 33.8069L41.7599 36.1888L43.6688 34.2879L41.2887 31.898L43.6688 29.5081L41.7599 27.6072L39.3878 29.9891L37.0157 27.6072L35.1068 29.5081L37.4869 31.898L35.1068 34.2879L37.0157 36.1888Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M12.7548 36.1908L15.1428 33.8029L17.5308 36.1908L19.4356 34.2859L17.0478 31.8979L19.4356 29.5101L17.5308 27.6051L15.1428 29.993L12.7548 27.6051L10.85 29.5101L13.2378 31.8979L10.85 34.2859L12.7548 36.1908Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M43.1088 46.476L40.7347 48.8501L38.3605 46.476L36.4556 48.3809L38.8297 50.755L36.4556 53.1292L38.3605 55.0341L40.7347 52.66L43.1088 55.0341L45.0137 53.1292L42.6396 50.755L45.0137 48.3809L43.1088 46.476Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M55.2312 46.476L52.8571 48.8501L50.483 46.476L48.578 48.3809L50.9521 50.755L48.578 53.1292L50.483 55.0341L52.8571 52.66L55.2312 55.0341L57.1362 53.1292L54.7621 50.755L57.1362 48.3809L55.2312 46.476Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M15.1429 57.4899C18.1137 57.4899 20.5306 55.0729 20.5306 52.1021C20.5306 49.5963 18.811 47.4845 16.4898 46.8849V42.6735H52.1837C53.496 42.6735 54.2041 41.6326 54.2041 40.6531V28.4151L57.2925 31.5035L59.1975 29.5985L53.8097 24.2108C53.2837 23.6848 52.4309 23.6848 51.9047 24.2108L46.517 29.5985L48.422 31.5035L51.5102 28.4151V39.9796H15.8164C14.504 39.9796 13.7959 41.0207 13.7959 42.0001V46.8849C11.4748 47.4845 9.75513 49.5963 9.75513 52.1021C9.75513 55.0729 12.1721 57.4899 15.1429 57.4899ZM15.1429 49.4082C16.6283 49.4082 17.8368 50.6167 17.8368 52.1021C17.8368 53.5875 16.6283 54.796 15.1429 54.796C13.6575 54.796 12.449 53.5875 12.449 52.1021C12.449 50.6167 13.6575 49.4082 15.1429 49.4082Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
                <path
                  d="M16.4898 50.7551H13.7959V53.449H16.4898V50.7551Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.0049"
                />
              </g>
              <defs>
                <clipPath id="clip0_239_61">
                  <rect
                    width="66"
                    height="66"
                    fill="white"
                    transform="translate(1 9)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="text-sm md:text-base font-semibold">
              دوره های کاربردی
            </span>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-center justify-center mb-6 md:mb-12">
            <svg
              className="w-1/4 mb-4"
              viewBox="0 0 80 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="70" r="7" fill="#A3E635" />
              <circle cx="63.5" cy="16.5" r="16.5" fill="#A3E635" />
              <path
                d="M29.75 27.5668C24.6675 23.0076 18.0777 20.4904 11.25 20.4998C8.00633 20.4998 4.89217 21.0548 2 22.0785V66.0159C4.97116 64.9677 8.09934 64.4338 11.25 64.4373C18.3571 64.4373 24.8413 67.1105 29.75 71.5043M29.75 27.5668C34.8324 23.0074 41.4222 20.4901 48.25 20.4998C51.4937 20.4998 54.6078 21.0548 57.5 22.0785V66.0159C54.5288 64.9677 51.4007 64.4338 48.25 64.4373C41.4223 64.4279 34.8325 66.9451 29.75 71.5043M29.75 27.5668V71.5043"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M60.288 19.5378C61.2726 18.5534 62.6078 18.0004 64 18.0004C65.3922 18.0004 66.7275 18.5534 67.712 19.5378M57.106 16.3558C60.913 12.5477 67.086 12.5477 70.894 16.3558M53.924 13.1737C59.489 7.60875 68.511 7.60875 74.076 13.1737M64.53 22.7197L64 23.2498L63.47 22.7197C63.6106 22.5793 63.8013 22.5004 64 22.5004C64.1988 22.5004 64.3894 22.5793 64.53 22.7197Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-sm md:text-base font-semibold">
              آموزش آنلاین
            </span>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-center justify-center mb-6 md:mb-12">
            <svg
              className="w-1/4 mb-4"
              viewBox="0 0 83 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="71" r="7" fill="#A3E635" />
              <circle cx="66.5" cy="17.5" r="16.5" fill="#A3E635" />
              <path
                d="M66.7211 18.0233C66.7211 18.0233 63.7015 11.9841 58.7946 11.9841C55.3901 11.9841 52.6296 14.6892 52.6296 18.0233C52.6296 21.3575 55.3901 24.0625 58.7946 24.0625C61.1543 24.0625 63.2611 22.6527 64.708 21.0429"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M66.7211 18.0233C66.7211 18.0233 69.7407 24.0625 74.6475 24.0625C78.0521 24.0625 80.8125 21.3575 80.8125 18.0233C80.8125 14.6892 78.0521 11.9841 74.6475 11.9841C72.2878 11.9841 70.181 13.3939 68.7341 15.0037"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M52.4816 47.9894H47.4833C44.7229 47.9894 42.4851 50.2272 42.4851 52.9877V57.9859C42.4851 60.7464 44.7229 62.9842 47.4833 62.9842C50.2438 62.9842 52.4816 60.7464 52.4816 57.9859V47.9894ZM52.4816 47.9894C52.4816 35.5674 42.4115 25.4973 29.9895 25.4973C17.5674 25.4973 7.49738 35.5674 7.49738 47.9894M7.49738 47.9894V57.9859C7.49738 60.7464 9.73517 62.9842 12.4956 62.9842C15.2561 62.9842 17.4939 60.7464 17.4939 57.9859V52.9877C17.4939 50.2272 15.2561 47.9894 12.4956 47.9894H7.49738Z"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="square"
              />
              <path
                d="M52.4816 52.9877V62.9842C52.4816 67.9824 50.8155 70.4815 47.4833 70.4815C44.1512 70.4815 39.986 70.4815 34.9877 70.4815"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="square"
              />
            </svg>

            <span className="text-sm md:text-base font-semibold">
              پشتیبانی همیشگی
            </span>
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-10 px-8 md:px-3 py-4">
        <div className="flex items-center flex-wrap">
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 md:mb-8 text-2xl md:text-4xl font-semibold">
              جدیدترین دوره ها
            </h3>
            <p className="mb-4 md:text-lg">همراهی از شروع تا بینهایت</p>
          </div>
          <div className="w-full md:w-3/4 md:pr-8">
            <SwiperSlider
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              breakpoints={{
                360: {
                  slidesPerView: 1.2,
                  spaceBetween: 25,
                },
                600: {
                  slidesPerView: 1.8,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 2.3,
                  spaceBetween: 25,
                },
                1200: {
                  slidesPerView: 2.6,
                  spaceBetween: 50,
                },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={product._id}>
                  <ProductCard
                    product={product}
                    className="w-full overflow-hidden rounded-lg bg-neutral-50 shadow-md border border-gray-100"
                  />
                </SwiperSlide>
              ))}
            </SwiperSlider>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 md:px-3 mb-6 bg-gradient-to-t from-sky-700 from-65% to-65%">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <img
              className="mx-auto"
              src={homePageHeroBg2}
              alt="Doryad method"
            />
          </div>
          <div className="w-full md:w-1/2 mt-auto mb-12 flex justify-center">
            <div>
              <h3 className="mb-4 md:mb-8 text-2xl md:text-4xl font-semibold text-gray-100">
                نحوه همراهی دُریاد با شما
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center md:text-lg text-gray-100">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-300" />
                  پشتیبانی و پاسخگویی به سوالات
                </li>
                <li className="flex items-center md:text-lg text-gray-100">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-300" />
                  جلسات آنلاین مشاوره و رفع اشکال
                </li>
                <li className="flex items-center md:text-lg text-gray-100">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-300" />
                  ارائه راهنمایی و نحوه استفاده بهینه از دوره ها
                </li>
                <li className="flex items-center md:text-lg text-gray-100">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-300" />
                  بروزرسانی مادام العمر محتوای دوره ها
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 md:px-3 mb-10">
        <div className="container mx-auto lg:px-10 md:pt-16 flex flex-wrap flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div>
              <h3 className="mb-4 md:mb-8 text-2xl md:text-4xl font-semibold text-gray-800">
                یکم درباره دُریاد
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center md:text-lg text-gray-800">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-400" />
                  آموزش کاربردی و پروژه محور
                </li>
                <li className="flex items-center md:text-lg text-gray-800">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-400" />
                  دسترسی تمام وقت به مطالب و پشتیبانی
                </li>
                <li className="flex items-center md:text-lg text-gray-800">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-400" />
                  توجه کامل به نیازها و مشکلات دانشجویان
                </li>
                <li className="flex items-center md:text-lg text-gray-800">
                  <PlusCircleIcon className="w-6 h-6 ml-3 text-lime-400" />
                  آماده سازی دانشجو برای ورود به بازار کار
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="mx-auto mb-5 md:mb-0"
              src={homePageHeroBg3}
              alt="about us"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
