export const ImageComponent = ({ src }) => {
  return (
    <div className={"flex flex-col justify-center md:items-center"}>
      <img src={src} className={"md:h-12 md:w-12 h-10 w-10"} />
    </div>
  );
};