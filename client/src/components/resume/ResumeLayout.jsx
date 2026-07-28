// function ResumeLayout({
//   left,
//   right,
// }) {
//   return (
//     <div className="grid gap-8 lg:grid-cols-5">

//       <div className="lg:col-span-3">
//         {left}
//       </div>

//       <div className="lg:col-span-2">

//         <div className="sticky top-6">

//           {right}

//         </div>

//       </div>

//     </div>
//   );
// }

// export default ResumeLayout;




function ResumeLayout({ left, right }) {
  return (
    <div className="mx-auto grid max-w-screen-2xl gap-8 xl:grid-cols-12">

      <div className="xl:col-span-7">
        {left}
      </div>

      <div className="xl:col-span-5">
        <div className="sticky top-6">
          {right}
        </div>
      </div>

    </div>
  );
}

export default ResumeLayout;