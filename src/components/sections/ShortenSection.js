import { useState, useRef } from "react";
import Button from "../button/Button";
import shortenCSS from "./shortenCSS.css";
import linkItem from "./LinkItem";

let countItems = 0; //variable to help with logic on number of links gotten

const Shorten = () => {
  const [shortenLinks, setShortenLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [linkErrorMessage, setLinkErrorMessage] = useState("");
  const inputRef = useRef(); //variable to hold reference to input element

  //function to get the links from API
  const getShortenLink = async (url) => {
    setIsLoading(true);
    //setLinkErrorMessage("Loading. Please wait...")
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );

      if (response.ok) {
        throw new Error("Please add a valid link");
      }

      const data = await response.json();

      //created an object to hold the data from json 
      const link = {
        id: countItems,
        fullLink: data.result.original_link,
        shortenLink: data.result.short_link,
      };

      setShortenLinks((prev) => [...prev, link]);
      setIsLoading(false);
      countItems++;
      setLinkErrorMessage("");
    } catch (error) {
      setLinkErrorMessage(error.message);
      inputRef.current.focus();
    }
  };

  //click handler
  const linkEventHandler = (event) => {
    event.preventDefault();

    enteredLink = inputRef.current.value.trim().toLowerCase();

    if (enteredLink.length === 0) {
      setLinkErrorMessage("Please type a link");
      inputRef.current.focus;
      return;
    }

    getShortenLink(enteredLink);
    inputRef.current.value = "";
  };

  return (
    <>
      <section className={shortenCSS.shorten}>
        <div className="container">
          <form action="" className={`${shortenCSS.shorten__form}`}>
            <input
              ref={inputRef}
              className={shortenCSS.shorten__search__input}
              placeholder="Shorten a link here..."
              type="text"
            />
            {linkErrorMessage.length !== 0 && (
              <p className={shortenCSS.shorten__search__error}>
                {linkErrorMessage}
              </p>
            )}
            <Button
              type="submit"
              className={shortenCSS.shorten__btn}
              onClick={() => linkEventHandler}
            ></Button>
          </form>
        </div>
      </section>

      {(shortenLinks.length !== 0 || isLoading) && (
        <section className={shortenCSS.result}>
          <div className="container center">
            <u className={`row ${shortenCSS.result__list}`}>
              {isLoading && (
                <li
                  className={`row ${shortenCSS.result__list__items} ${shortenCSS.loader}`}
                >
                  <div className={shortenCSS.loader___dots}></div>
                </li>
              )}

              {setShortenLinks
                .slice(0)
                .reverse()
                .map((link) => (
                  <linkItem key={link.id} linkData={link} />
                ))}
            </u>
          </div>
        </section>
      )}
    </>
  );
};

export default Shorten;
