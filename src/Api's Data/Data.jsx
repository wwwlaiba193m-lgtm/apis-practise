import React, { Component } from "react";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import loader from "../Media/loading-gif.gif";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      article: [],
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce969f7360cb47668f5a9a0ec5b6326d&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let getdata = await data.json();
    console.log(getdata);
    this.setState({
      article: getdata.articles,
      totalResults: getdata.totalResults,
      page: this.state.page,
    });
  }
  render() {
    const handleNext = async () => {
      this.setState({ loading: false });
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce969f7360cb47668f5a9a0ec5b6326d&pageSize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let getdata = await data.json();
      this.setState({
        article: getdata.articles,
        page: this.state.page + 1,
        loading: true,
      });
    };
    const handlePrevious = async () => {
      this.setState({ loading: false });
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce969f7360cb47668f5a9a0ec5b6326d&pageSize=${
        this.props.pageSize
      }&page=${this.state.page - 1}`;
      let data = await fetch(url);
      let getdata = await data.json();
      this.setState({
        article: getdata.articles,
        page: this.state.page - 1,
        loading: true,
      });
    };
console.log("hello")
    let totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    return (
      <>
    
        <h3>
          Page Number = {this.state.page} from totla page {totalPages}
        </h3>
        <div className="container">
          {this.state.loading == false ? (
            <img src={loader} alt="" className="loader"/>
          ) : (
            this.state.article.map((ele, index) => (
              <div className="box" key={index}>
                <h3>
                  {ele.title
                    ? ele.title.slice(0, 50)
                    : "Powerball estimated jackpot jumps to $815 million,"}
                </h3>
                <img
                  src={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://thehill.com/wp-content/uploads/sites/2/2025/08/AP25216121882316_56b58e-e1755953862148.jpg?w=1280"
                  }
                  alt=""
                />
                <p>
                  {ele.content
                    ? ele.description.slice(0, 100)
                    : "Wednesday night's Powerball jackpot will be an estimated $815 million, the game's seventh biggest, with "}
                </p>
                <a href={ele.url}>Read more</a>
              </div>
            ))
          )}
        </div>
        <div className="container">
          <button
            className="icon-btn"
            onClick={handlePrevious}
            disabled={this.state.page <= 1}
          >
            <MdOutlineSkipPrevious className="icon" />
          </button>

          <button
            className="icon-btn"
            onClick={handleNext}
            disabled={this.state.page >= totalPages}
          >
            <MdOutlineSkipNext className="icon" />
          </button>
        </div>
      </>
    );
  }
}
