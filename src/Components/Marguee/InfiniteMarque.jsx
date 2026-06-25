import feedbacks from "../../data/feedbacks";
import FeedbackCard from "./FeedbackCard";

export default function InfiniteMarquee() {
  const firstRow = feedbacks;

  //   ! to add a reverse second row
  //   const secondRow = [...feedbacks].reverse();

  return (
    <section className="relative overflow-hidden py-20">
      {/* First Row */}
      <div className="marquee relative w-full overflow-hidden h-full">
        <div className="marquee-content p-4">
          {[...firstRow, ...firstRow].map((item, index) => (
            <FeedbackCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="h-0" />
      {/* //! to add a reverse second row */}
      {/* Second Row */}
      {/* <div className="marquee relative w-full overflow-hidden">
        <div className="marquee-content reverse p-4">
          {[...secondRow, ...secondRow].map((item, index) => (
            <FeedbackCard key={index} {...item} />
          ))}
        </div>
      </div> */}
    </section>
  );
}
