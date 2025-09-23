import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-24">
      <div className="container">{children}</div>
    </section>
  );
};

export default Container;
