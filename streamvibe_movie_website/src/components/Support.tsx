import supportImage from "/assets/images/supportImage.png";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "../styles/Support.css";
import FAQ from "./FAQ";
import StartFreeTrial from "./PlanSection/StartFreeTrial";

const Support = () => {
  const [selected, setSelected] = useState("AZ");
  return (
    <section className="support">
      <div className="supportWelcome">
        <div className="left-side">
          <h1>Welcome to our support page!</h1>
          <p>
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <img src={supportImage} alt="Support Image" />
        </div>
        <div className="right-side">
          <form>
            <div className="row">
              <div className="firstname">
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Enter first name"
                />
              </div>

              <div className="lastname">
                <label htmlFor="lastname">Last Name</label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="row">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>

              <div className="phoneNumber">
                <label htmlFor="phoneNumber">Phone Number</label>
                <div className="numberInput">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    countries={["AZ", "TR", "US", "DE", "FR"]}
                    fullWidth={false}
                    showSelectedLabel={false}
                    showOptionLabel={false}
                    customLabels={{
                      AZ: "Azerbajan",
                      TR: "Türkiye",
                      US: "USA",
                      DE: "Germany",
                      FR: "France",
                    }}
                  />

                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            <div className="messageContainer">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                rows={6}
              ></textarea>
            </div>

            <div className="agreeAndConfirm">
              <div className="checkbox">
                <input type="checkbox" />
                <p>I agree with Terms of Use and Privacy Policy</p>
              </div>

              <div className="sendButton">
                <button>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <FAQ />

      <StartFreeTrial />
    </section>
  );
};

export default Support;
