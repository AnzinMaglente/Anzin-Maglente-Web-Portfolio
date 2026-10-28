import CommentComponent from "../partials/CommentComponent";

export default function AdminCommentsTab() {
  // Variables for dynamic content
  return (
    <div>
      <h2 className="mx-6 mt-9 mb-8 text-xl font-semibold text-blue-600">
        Comments
      </h2>
      <hr className="w-19/20 mx-auto my-6 border-gray-600" />
      <div className="w-7/8 lg:w-full max-w-4xl max-h-120 mx-auto overflow-y-scroll ">
        {/* Sample Comments */}
        {[
          {
            username: "AmongUsLover825",
            articlename:
              "Among Us And Stardew Valley Collab Brings Free Rewards For A Limited Time",
            articlelink: "",
            userpicture: "../../src/assets/Samples/Among Us sample profile.png",
            date: "20 Nov 2025",
            comment: "Amogus sus",
          },
          {
            username: "MaddMellow",
            articlename:
              "Tom Cruise accepts honorary Oscar: ‘Making films is not what I do. It’s who I am’",
            articlelink: "",
            date: "18 Nov 2025",
            comment: "Why is this in my feed?",
          },
          {
            username: "TheRealDeku",
            articlename:
              "Among Us And Stardew Valley Collab Brings Free Rewards For A Limited Time",
            articlelink: "",
            userpicture: "../../src/assets/Samples/Deku sample profile.jpg",
            date: "19 Nov 2025",
            comment: "DUDE no way, new skins??",
          },
          {
            username: "Wilet",
            articlename:
              "Megabonk Developer Withdraws Game From The Game Awards, Saying It Doesn't Qualify for Debut Indie",
            articlelink: "",
            userpicture: "../../src/assets/Samples/person 2 sample profile.png",
            date: "19 Nov 2025",
            comment:
              "This article is well written in an engaging and lively style.",
          },
        ].map((item, idx) => (
          <CommentComponent
            key={idx}
            username={item.username}
            articlename={item.articlename}
            articlelink={item.articlelink}
            userpicture={item.userpicture}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
}
