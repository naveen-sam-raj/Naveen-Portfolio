import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcx7jv5", // EmailJS service ID
        "template_fca8rm9", // EmailJS template ID
        form.current,
        "wUsO6V4EJSmz7scT7", // Public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        },
      );
  };

  const skillSet = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 30 },
    { name: "Node.js", level: 30 },
    { name: "Django", level: 40 },
    { name: "MySQL", level: 40 },
    { name: "MongoDB", level: 60 },
  ];
  return (
    <div>
      <div className="w-full min-h-screen bg-[#0a0d1c]">
        <div className="ml-[40px]">
          <div className="flex flex-row gap-5 text-blue-800 text-[18px] pt-8 lg:text-lg lg:gap-9 lg:justify-end lg:mr-20">
            <div
              className="hover:text-white font-bold cursor-pointer"
              onClick={() =>
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </div>

            <div
              className="hover:text-white font-bold cursor-pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </div>
            <div
              className="hover:text-white font-bold cursor-pointer"
              onClick={() =>
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Skills
            </div>

            <div
              className="hover:text-white font-bold cursor-pointer"
              onClick={() =>
                document
                  .getElementById("project")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </div>

            <div
              className="hover:text-white font-bold cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </div>
          </div>
        </div>
        <div id="home">
          <div className="lg:mt-[-30px] mt-[20px] ml-[8px]">
            <div className="flex flex-col lg:gap-2 lg:ml-40 mt-5 lg:mt-8 ">
              <h1 className="font-bold text-white pt-20 ml-[35%] text-4xl lg:text-5xl lg:ml-20">
                Hi, I'm
              </h1>
              <br />
              <h1 className="font-bold text-white ml-[12%] mt-[-20px] text-4xl lg:text-6xl lg:ml-20 ">
                Naveen Sam Raj H
              </h1>
              <br />
              <h1 className="font-bold text-white ml-[19%] text-[20px] mt-[-18px] lg:text-3xl lg:ml-20">
                Full Stack Web Developer
              </h1>
            </div>
            <div className="lg:ml-20 lg:pt-6 mt-[-7px] ml-[15%] ">
              <a href="https://www.linkedin.com/in/naveensamraj">
                <p>
                  <img
                    src="/images/5a52b7bec9fe0749290716fe1c09190c.jpg"
                    alt=""
                    srcset=""
                    className="w-6 ml-6 lg:ml-[170px] lg:justify-center mt-6 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
              </a>
              <a href="https://github.com/Naveen2003-desigb">
                <p>
                  <img
                    src="/images/30f7f3d8c8454149826e347a0dd24d09.jpg"
                    alt=""
                    srcset=""
                    className="w-6 ml-[25%] mt-[-23px] lg:ml-[230px] lg:mt-[-23px]  rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
              </a>
              <p>
                <img
                  src="/images/4f747ed96769c0d8a939f98ad23f371b.jpg"
                  alt=""
                  srcset=""
                  className="w-6 ml-[42%] mt-[-24px] lg:ml-[290px] rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                  style={{
                    boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                  }}
                />
              </p>
              <p>
                <img
                  src="/images/8b956163994de7c8c3fb967eb0352d4b.jpg"
                  alt=""
                  srcset=""
                  className="w-6 ml-[61%] mt-[-23px] lg:ml-[350px] rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                  style={{
                    boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                  }}
                />
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-4 lg:ml-[250px] ml-[12%]">
            <div
              className="lg:w-40 w-[150px]  bg-cyan-300 lg:text-md  hover:bg-cyan-300 shadow-2xl shadow-cyan-300 transition ml-15 cursor-pointer mt-4 text-black font-bold rounded"
              style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
            >
              <div
                className=" font-bold cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("project")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <p className="text-center  ml-[-10px] mt-[6px] lg:mt-[-2px] text- lg:pt-2">
                  View Projects
                </p>
              </div>
            </div>
            <div
              className=" lg:w-40 h-10 w-[155px] bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer ml-3 mt-4 text-black font-bold rounded"
              style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
            >
              <a href="/Naveen Sam Raj Resume.pdf">
                <p className="text-center pt-2">Download Resume</p>
              </a>
            </div>
          </div>
          <div className="lg:ml-[890px] lg:mt-[-330px] ml-[80px] mt-[-10px]">
            <div
              className="lg:w-80 lg:h-80 w-0 h-0 border-3 rounded-full shadow-xl shadow-cyan-500 border-cyan-300 bg-amber-50 ml-50 mt-23"
              style={{
                boxShadow: "0 0 10px 10px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
            >
              <img
                src="/images/Naveen.jpg.HEIC"
                alt=""
                className="lg:w-80 lg:h-80 rounded-full"
              />
            </div>
          </div>
        </div>
        <div id="about">
          <div className="text-white font-bold ml-180 text-3xl mt-[28%] ml-[140px] lg:ml-[650px] lg:mt-[220px]">
            <div className="flex flex-row gap-1.5">
              <p>About </p>
              <p className="text-cyan-300">Me</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="ml-[-180px] lg:mt-1 mt-[20px] lg:ml-[-50px]">
              <div className=" w-80 h-80 lg:w-80 lg:h-80 border-3 rounded-full shadow-lg shadow-cyan-500 border-cyan-300 bg-amber-50 ml-60 mt-8">
                <img
                  src="/images/WhatsApp Image 2025-07-26 at 12.30.43_ac782e1b.jpg"
                  alt=""
                  className=" lg:w-80 lg:h-80 w-80 h-80 rounded-full"
                  style={{
                    boxShadow: "0 0 10px 10px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                  }}
                />
              </div>
            </div>
            <p className=" lg:w-[50%] lg:h-40  border-0 border-gray-100  text-white lg:ml-[80px] text-xl lg:mt-[100px] mt-[450px] ml-[-363px]">
              {" "}
              I’m H. Naveen Sam Raj, a passionate Full Stack Web Developer
              currently pursuing Computer Science Engineering. I specialize in
              building responsive websites using technologies like React,
              Django, and MySQL, Node js, Mango Db. I’ve presented several
              technical papers and developed projects like an eCommerce
              platform. I’m always eager to learn new technologies and apply
              them to solve real-world problems. My long-term goal is to grow in
              the IT industry and start my own tech-driven business.
            </p>
          </div>
          <div
            className="w-40 h-10 bg-cyan-300 hover:bg-cyan-300 shadow-2xl shadow-cyan-300 transition lg:ml-[44%] ml-[130px] lg:mt-[-25px] mt-10 cursor-pointer text-black font-bold rounded"
            style={{
              boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
            }}
          >
            <p className="text-center pt-2">More About Me</p>
          </div>
        </div>
        <div id="skills">
          <div>
            <h1 className="text-center font-bold text-3xl lg:mt-[15%] ml-[35%] mt-[28%] lg:ml-[49%] flex flex-row">
              <p className="text-white">My</p>
              <p className="text-cyan-300">Skills</p>
            </h1>
          </div>
          <div className="grid lg:grid-cols-2  lg:gap-[35px] gap-5 lg:px-40 mt-10 px-[5%] ">
            {skillSet.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full">
                  <div
                    className="bg-cyan-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="project">
          <div>
            <h1 className="text-center font-bold text-3xl lg:mt-[15%] lg:ml-[49%] flex flex-row ml-[34%] mt-[18%]">
              <p className="text-white">My</p>
              <p className="text-cyan-300">Projects</p>
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:ml-[5%] lg:gap-9">
            <div
              className=" lg:w-[18%] ml-[4%] w-[90%] h-[60%] lg:h-[390px] lg:ml-[10%] border-1 shadow-xl shadow-cyan-500 border-cyan-300 ml-55 mt-20 rounded-xl"
              style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
              data-aos="flip-right"
            >
              <img
                src="/images/ChatGPT Image Jul 26, 2025, 01_50_42 PM.png"
                alt=""
                srcset=""
                className="lg:w-53 lg:h-40 w-[97%] lg:ml-0.5 ml-1 mt-[10px] rounded-xl lg:mt-1"
              />
              <h3 className="text-cyan-300 font-bold text-2xl ml-[65px] lg:text-[13px] lg:ml-12 lg:mt-2">
                Furniture Ecommerce
              </h3>
              <p className="text-white text-xl lg:text-[12px] ml-2 mt-10 lg:ml-2 lg:mt-2">
                This project is a modern and responsive furniture eCommerce
                website designed to showcase and sell home furnishing products.
              </p>
              <div
                className="w-40 h-8 bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer lg:ml-9 lg:mt-6 mt-12 ml-[110px] text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              >
                <a href="https://furniture-pied-sigma.vercel.app/">
                  {" "}
                  <p className="text-center  lg:pt-1">View Project</p>
                </a>
              </div>
            </div>
            <div
              className=" lg:w-[18%] ml-[4%] w-[90%] lg:h-[390px] lg:ml-[10%] border-1 shadow-xl shadow-cyan-500 border-cyan-300 ml-55 mt-20 rounded-xl"
              style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
              data-aos="flip-left"
            >
              <img
                src="/images/ChatGPT Image Jul 26, 2025, 02_10_27 PM.png"
                alt=""
                srcset=""
                className="lg:w-53 lg:h-40 w-[97%] lg:ml-0.5 ml-1 mt-[10px] rounded-xl lg:mt-1"
              />
              <h3 className="text-cyan-300 font-bold text-2xl ml-[65px] lg:text-[13px] lg:ml-12 lg:mt-2">
                Simple Calculator
              </h3>
              <p className="text-white text-xl lg:text-[12px] ml-2 mt-10 lg:ml-2 lg:mt-2">
                A clean and functional calculator built using modern web
                technologies. It supports basic arithmetic operations
              </p>
              <div
                className="w-40 h-8 bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer lg:ml-9 lg:mt-12 mt-[80px] ml-[110px] text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              >
                <a href="https://calculator-ten-liard-16.vercel.app/">
                  {" "}
                  <p className="text-center  lg:pt-1">View Project</p>
                </a>
              </div>
            </div>
            <div
              className=" lg:w-[18%] ml-[4%] w-[90%] lg:h-[390px] lg:ml-[10%] border-1 shadow-xl shadow-cyan-500 border-cyan-300 ml-55 mt-20 rounded-xl"
              style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
            >
              <img
                src="/images/WhatsApp Image 2025-07-26 at 14.31.30_1db87a30.jpg"
                alt=""
                srcset=""
                className="lg:w-53 lg:h-40 w-[97%] lg:ml-0.5 ml-1 mt-[10px] rounded-xl lg:mt-1"
              />
              <h3 className="text-cyan-300 font-bold text-2xl ml-[65px] lg:text-[13px] lg:ml-12 lg:mt-2">
                Online Learning App
              </h3>
              <p className="text-white text-xl lg:text-[12px] ml-2 mt-10 lg:ml-2 lg:mt-2">
                This project is a modern and responsive furniture eCommerce
                website designed to showcase and sell home furnishing products.
              </p>
              <div
                className="w-40 h-8 bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer lg:ml-9 lg:mt-6 mt-10 ml-[110px] text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              >
                {" "}
                <p className="text-center  lg:pt-1">View Project</p>
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
          <h1 className="text-center font-bold text-3xl lg:mt-[15%] ml-[28%] mt-[40%] lg:ml-[48%] flex flex-row gap-2">
            <p className="text-white">Contact</p>
            <p className="text-cyan-300">Me</p>
          </h1>
          <div className="flex lg:flex-row flex-col lg:gap-[30%]">
            <div className="lg:ml-[10%] ml-5">
              <p className="text-xl text-white mt-[15%] lg:mt-20 font-bold ml-25">
                Let's Work Together
              </p>
              <p className="text-white text-[14px] mt-3 ml-25">
                Feel free to reach out if you're interested in collaborating or
                have any questions about my work. <br />
                You can contact me via email or connect with me on LinkedIn—I'd
                love to hear from you!
              </p>
              <div className="flex flex-row gap-2 lg:ml-25 ">
                <p>
                  <img
                    src="/images/54de000e63daac2b763707a5ef36ec49.jpg"
                    alt=""
                    srcset=""
                    className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
                <p className="text-white font-bold text-[13px] mt-5">
                  hnaveensamraj@gmail.com
                </p>
              </div>
              <div className="flex flex-row gap-2 ml-25">
                <p>
                  <img
                    src="/images/54de000e63daac2b763707a5ef36ec49.jpg"
                    alt=""
                    srcset=""
                    className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
                <p className="text-white font-bold text-[13px] mt-5">
                  9943269660
                </p>
              </div>
              <div className="flex flex-row gap-6 ml-25 mt-5 cursor-pointer">
                <a href="https://www.linkedin.com/in/naveensamraj">
                  <p>
                    <img
                      src="/images/5a52b7bec9fe0749290716fe1c09190c.jpg"
                      alt=""
                      srcset=""
                      className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                      }}
                    />
                  </p>
                </a>
                <a href="https://github.com/Naveen2003-desigb">
                  <p>
                    <img
                      src="/images/30f7f3d8c8454149826e347a0dd24d09.jpg"
                      alt=""
                      srcset=""
                      className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                      }}
                    />
                  </p>
                </a>
                <p>
                  <img
                    src="/images/8b956163994de7c8c3fb967eb0352d4b.jpg"
                    alt=""
                    srcset=""
                    className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
                <p>
                  <img
                    src="/images/4f747ed96769c0d8a939f98ad23f371b.jpg"
                    alt=""
                    srcset=""
                    className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="lg:ml-1 ml-[13%]">
              <form ref={form} onSubmit={sendEmail} className="mt-20">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px]  pt-[-100px]"
                  required
                />{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px]  mt-2 pt-[-100px]"
                  required
                />{" "}
                <br />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px]   mt-2 pt-[-100px]"
                />{" "}
                <br />
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  className="w-80 h-40 border-0 bg-gray-500 text-white rounded-[5px]  mt-2 pt-[-100px]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-80 h-8 border-0 bg-cyan-300 rounded-[9px] border-cyan-300 shadow-xl shadow-cyan-300 mt-2"
                  style={{
                    boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)",
                  }}
                >
                  <p className="text-center text-blue-500">Submit</p>
                </button>
              </form>
            </div>
          </div>
          <div className="w-full h-10 bg-cyan-950 text-center text-white  lg:mt-12 mt-10">
            <p className="pt-3"> Developed with love by Naveen@2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
