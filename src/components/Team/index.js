import React from "react";
import Style from "./Team.module.css";
export default function     DbgTeamComp() {
  

    return (
        <div className="teamPageArea">
            <section className={Style.section}>
  <span>meet our</span>
  <h2>Team</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium veritatis voluptatibus ut consequuntur quas consequatur omnis id rem obcaecati.</p>
  <span class={Style.bgWatermark}>team</span>
  <div class={Style.cards}>
    <div class={Style.cardInside}>
      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Franklin Carlson" />
      <div class={Style.cardContent}>
        <h3>franklin carlson</h3>
        <p>UX Designer</p>
        <ul>
          <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <div class={Style.cardInside}>
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Antonia Moore" />
      <div class={Style.cardContent}>
        <h3>antonia moore</h3>
        <p>product designer</p>
        <ul>
          <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
    <div class={Style.cardInside}>
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travis Lynch" />
      <div class={Style.cardContent}>
        <h3>travis lynch</h3>
        <p>web developer</p>
        <ul>
          <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}