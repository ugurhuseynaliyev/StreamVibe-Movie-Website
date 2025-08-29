import "../styles/FAQ.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpand =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const questions = [
    {
      id: "0",
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },

    {
      id: "1",
      question: "How much does StreamVibe cost?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },

    {
      id: "2",
      question: "What content is available on StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },

    {
      id: "3",
      question: "How can I watch StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },

    {
      id: "4",
      question: "How do I sign up for StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },

    {
      id: "5",
      question: "What is the StreamVibe free trial?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },

    {
      id: "6",
      question: "How do I contact StreamVibe customer support?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },

    {
      id: "7",
      question: "What are the StreamVibe payment methods?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
  ];

  return (
    <section className="faqSection">
      <div className="faqTop">
        <div className="faqLeft">
          <h1 className="faqTitle">Frequently Asked Questions</h1>
          <p className="faqDescription">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <div className="faqRight">
          <button className="askQuestion">Ask a Question</button>
        </div>
      </div>

      <div className="questionsContainer">
        <div className="faqColumn">
          {questions.slice(0, 4).map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleExpand(faq.id)}
              sx={{
                background: "transparent",
                color: "white",
                marginTop: "2rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === faq.id ? (
                    <HiMinus color="white" />
                  ) : (
                    <HiPlus color="white" />
                  )
                }
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: "14px" }}>
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <div className="faqColumn">
          {questions.slice(4).map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleExpand(faq.id)}
              sx={{
                background: "transparent",
                color: "white",
                marginTop: "2rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === faq.id ? (
                    <HiMinus color="white" />
                  ) : (
                    <HiPlus color="white" />
                  )
                }
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: "14px" }}>
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
