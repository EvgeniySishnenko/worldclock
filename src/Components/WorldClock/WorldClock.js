import React, { Component } from "react";
import { nanoid } from "nanoid";
import Clock from "./Clock";

import Form from "./Form";

export default class WorldClock extends Component {
  state = {
    clock: [],
  };

  addClock = (date) => {
    let arr = [];
    arr = this.state.clock;
    arr = [
      ...this.state.clock,
      {
        id: nanoid(),
        greenwich: date.timeZone,
        name: date.name,
      },
    ];
    this.setState({ clock: arr });
  };

  removeTraining = (id) => {
    this.setState({
      clock: this.state.clock.filter((clock) => clock.id !== id),
    });
  };

  componentDidUpdate() {
    const id = setInterval(() => {
      if (this.state.clock.length !== 0) {
        this.state.clock.map((a) => {
          let arr = [];
          arr = this.state.clock;

          this.setState({ clock: arr });
        });
      } else {
        clearInterval(id);
      }
    }, 1000);
    return () => clearInterval(id);
  }
  render() {
    let arrComp = [];
    this.state.clock.map((a) => {
      let moscow = new Date().getTime();
      // let utcMsk = new Date().getTimezoneOffset() / 60;
      let zeroDate = moscow - 10800000;
      let timeZone = a.greenwich.slice(3, 5);
      let utcMlsec = timeZone * 3600000;
      let r = zeroDate + utcMlsec;
      let dd = new Date(r);
      const data = {
        id: a.id,
        hh: dd.getHours() * 30,
        mm: dd.getMinutes() * 6,
        ss: dd.getSeconds() * 6,
      };

      arrComp.push(
        <Clock
          onRemove={this.removeTraining}
          key={a.id}
          name={a.name}
          data={data}
        />
      );
    });

    return (
      <div className="WorldClock">
        <Form addClock={this.addClock} />
        <div className="Clocks">
          {this.state.clock.length !== 0 ? (
            arrComp
          ) : (
            <p className="default">Еще нет часов</p>
          )}
        </div>
      </div>
    );
  }
}
