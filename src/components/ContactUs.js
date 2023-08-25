import { useState } from "react";
import { InputField } from "./InputField";

export const ContactUs = () => {
  const initialState = {
    name: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    phone: {
      value: "",
      error: "",
    },
    subject: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  };
  const [formValue, setFormValue] = useState(initialState);
  const handleFromChange = (e) => {
    const { name, value } = e.target;
    const updatedFormValue = { ...formValue };
    updatedFormValue[name].value = value;
    updatedFormValue[name].error = "";
    setFormValue(updatedFormValue);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let isFormValid = true;
    const updatedFormValue = { ...formValue };
    for (const field in updatedFormValue) {
      if (!updatedFormValue[field].value) {
        updatedFormValue[field].error = "Please enter " + field;
        isFormValid = false;
      } else {
        let shouldResetError = true;
        if (field === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(updatedFormValue.email.value)) {
            updatedFormValue.email.error = "Please enter a valid email address";
            isFormValid = false;
            shouldResetError = false;
          }
        }
        if (field === "phoneNumber") {
          const phoneNumberRegex = /^\d{10}$/;
          if (!phoneNumberRegex.test(updatedFormValue.phoneNumber.value)) {
            updatedFormValue.phoneNumber.error =
              "Please enter a valid phone number";
            isFormValid = false;
            shouldResetError = false;
          }
        }
        if (field === "message") {
          if (updatedFormValue.message.value.length > 100) {
            updatedFormValue.message.error =
              "Message should not exceed 100 characters";
            isFormValid = false;
            shouldResetError = false;
          }
        }
        if (shouldResetError) {
          updatedFormValue[field].error = "";
        }
      }
    }

    if (!isFormValid) {
      setFormValue(updatedFormValue);
      return;
    }
    const message = `
      Name: ${formValue.name.value}
      Email: ${formValue.email.value}
      Subject: ${formValue.subject.value}
      Phone: ${formValue.phone.value}
      Message: ${formValue.message.value}
    `;
    const whatsappURL = `https://api.whatsapp.com/send?phone=7350837127&text=${message}`;
    window.open(whatsappURL, "_blank");
    setFormValue(initialState);
  };

  return (
    <div id="contactus" style={{ marginBottom: "20px", padding: "6em 0px" }}>
      <section className="ftco-domain">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 ftco-animate">
              <img
                className="d-flex align-items-center justify-content-center"
                src="images/contactus.png"
                alt=""
              />
              <h2>Let's Talk - Contact Us</h2>
              <p>
                Please provide the required details, and we will get back to
                you.
              </p>
            </div>
            <div className="col-lg-7 p-5 ftco-wrap ftco-animate">
              <form action="#" className="domain-form mb-3">
                <div className="d-flex">
                  <div className="form-group domain-name contactus_field">
                    <InputField
                      name={"name"}
                      value={formValue.name.value}
                      onChange={handleFromChange}
                      placeholder={"Enter your name"}
                      errorMessage={formValue.name.error}
                    />
                  </div>
                  <div className="form-group domain-name contactus_field">
                    <InputField
                      name={"email"}
                      onChange={handleFromChange}
                      placeholder={"Enter your email"}
                      errorMessage={formValue.email.error}
                      value={formValue.email.value}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="form-group domain-name contactus_field">
                    <InputField
                      name={"phone"}
                      onChange={handleFromChange}
                      placeholder={"Enter your phone"}
                      errorMessage={formValue.phone.error}
                      value={formValue.phone.value}
                    />
                  </div>
                  <div className="form-group domain-name contactus_field">
                    <InputField
                      name={"subject"}
                      onChange={handleFromChange}
                      placeholder={"Enter your phone"}
                      errorMessage={formValue.subject.error}
                      value={formValue.subject.value}
                    />
                  </div>
                </div>
                <div
                  className="form-group domain-name contactus_field"
                  style={{ width: "97%" }}
                >
                  <textarea
                    rows={8}
                    cols={120}
                    className="form-control "
                    placeholder="Write Message"
                    name="message"
                    value={formValue.message.value}
                    onChange={handleFromChange}
                  ></textarea>
                  {formValue.message.error && (
                    <span style={{ color: "#383131" }}>
                      {formValue.message.error}
                    </span>
                  )}
                </div>
                <div className="form-group contactus_submit">
                  <input
                    type="submit"
                    className="search-domain btn btn-primary text-center"
                    value="Submit"
                    onClick={handleFormSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
