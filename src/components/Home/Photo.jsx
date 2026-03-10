function Photo(props) {
  return(
    <div className="flex justify-center w-[100%] lg:w-[30%]">
      <img src={props.logo} className="max-w-64 max-h-64 rounded-md" />
    </div>
  );
}

export default Photo;
