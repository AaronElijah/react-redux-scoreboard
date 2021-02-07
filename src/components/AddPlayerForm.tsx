import React, { Component } from "react";

interface AddPlayerFormProps {
  addPlayer: (name: string) => { type: string; name: string };
}

export default class AddPlayerForm extends Component<AddPlayerFormProps> {
  state = {
    name: "",
  };

  onNameChange = (e: React.SyntheticEvent) => {
    const eventTarget = e.target as HTMLInputElement;
    const name = eventTarget.value;
    this.setState({ name: name });
  };

  addPlayer = (e: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: "" });
  };

  render = () => {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Player Name"
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  };
}
