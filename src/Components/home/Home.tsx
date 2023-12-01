import home from "../../assets/Media.png";

const Home = () => {
  return (
    <section className="container lg:flex-row">
      <div className="section__padding app__wrapper bg-gradient-to-r from-[#3BA29B] to-[#E4FDE5] w-[100vw] ">
        <div className=" flex xl:w-full items-start justify-center lg:justify-between flex-col ">
          <div className="hero flex-1">
            <h1 className=" font-bold md:text-[70px] text-[50px] lg:text-[80px] lg:leading-[90px] leading-[60px] text-headerBlack ">
              HealthPaddy <br />{" "}
              <span className="text-textWhite">is coming!</span>
            </h1>
            <p className=" text-textWhite text-[20px] my-8">
              Nigeria’s first personalised meal plan solution : <br /> fuelling
              your health journey one meal at a time
            </p>
          </div>
          {/* search bar */}
          <div className="flex justify-between rounded-[10px] border border-gray-400 lg:gap-x-6 gap-y-6 py-2 px-2 bg-white lg:w-[476px]">
            <input
              className="outline-0 border-0 text-black pl-3 text-[12px]"
              type="email"
              placeholder="Enter email address"
            />
            <button
              className="custom__button hover:bg-gradient-to-r from-[#68baaf] to-[#95bbb2]"
              style={{ flex: "0 0 auto", minWidth: "100px" }}
            >
              Notify Me
            </button>
          </div>
          <div className="flex icons py-[30px] gap-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M17.528 0H7.472C3.104 0 0.5 2.604 0.5 6.972V17.016C0.5 21.396 3.104 24 7.472 24H17.516C21.884 24 24.488 21.396 24.488 17.028V6.972C24.5 2.604 21.896 0 17.528 0ZM12.5 16.656C9.932 16.656 7.844 14.568 7.844 12C7.844 9.432 9.932 7.344 12.5 7.344C15.068 7.344 17.156 9.432 17.156 12C17.156 14.568 15.068 16.656 12.5 16.656ZM19.604 5.856C19.544 6 19.46 6.132 19.352 6.252C19.232 6.36 19.1 6.444 18.956 6.504C18.812 6.564 18.656 6.6 18.5 6.6C18.176 6.6 17.876 6.48 17.648 6.252C17.54 6.132 17.456 6 17.396 5.856C17.336 5.712 17.3 5.556 17.3 5.4C17.3 5.244 17.336 5.088 17.396 4.944C17.456 4.788 17.54 4.668 17.648 4.548C17.924 4.272 18.344 4.14 18.728 4.224C18.812 4.236 18.884 4.26 18.956 4.296C19.028 4.32 19.1 4.356 19.172 4.404C19.232 4.44 19.292 4.5 19.352 4.548C19.46 4.668 19.544 4.788 19.604 4.944C19.664 5.088 19.7 5.244 19.7 5.4C19.7 5.556 19.664 5.712 19.604 5.856Z"
                fill="#FDFDFD"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M24.488 17.028C24.488 21.396 21.884 24 17.516 24H16.088C15.428 24 14.888 23.46 14.888 22.8V15.876C14.888 15.552 15.152 15.276 15.476 15.276L17.588 15.24C17.756 15.228 17.9 15.108 17.936 14.94L18.356 12.648C18.392 12.432 18.224 12.228 17.996 12.228L15.44 12.264C15.104 12.264 14.84 12 14.828 11.676L14.78 8.736C14.78 8.544 14.936 8.37601 15.14 8.37601L18.02 8.328C18.224 8.328 18.38 8.17201 18.38 7.96801L18.332 5.08799C18.332 4.88399 18.176 4.728 17.972 4.728L14.732 4.77601C12.74 4.81201 11.156 6.444 11.192 8.436L11.252 11.736C11.264 12.072 11 12.336 10.664 12.348L9.22404 12.372C9.02004 12.372 8.86405 12.528 8.86405 12.732L8.90005 15.012C8.90005 15.216 9.05604 15.372 9.26004 15.372L10.7 15.348C11.036 15.348 11.3 15.612 11.312 15.936L11.42 22.776C11.432 23.448 10.892 24 10.22 24H7.46004C3.09204 24 0.488037 21.396 0.488037 17.016V6.972C0.488037 2.604 3.09204 0 7.46004 0H17.516C21.884 0 24.488 2.604 24.488 6.972V17.028Z"
                fill="#FDFDFD"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <img
            src={home}
            alt="img"
            className="w-[450px] lg:w-[530px] lg:h-[655px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
