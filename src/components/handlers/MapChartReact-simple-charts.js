import React,{useState} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import { Card, Image, Icon } from 'semantic-ui-react'


import MapChart from "../Charts/MapChartReact-simple-charts";

function MapChartCard() {
  const [content, setContent] = useState("");
  return (
    <Card>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </Card>
  );
}


export default MapChartCard
