import React from "react";

const Hero = () => {
  return (
    <div className=" text-center">
      <h1>
        welcome to unity estates
      </h1>
      <form className=" text-center" >
      <label>
        Book Name:
        <input type="text"  onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text"  onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="text" onChange={(e) => setYear(e.target.value)} />
      </label>
      <button className='bg-[blue]' type="submit">Add Book</button>
    </form>
     
    </div>
  );
};

export default Hero;
