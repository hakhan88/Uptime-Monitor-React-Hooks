import { map } from "lodash";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import ServerStatus from "./components/ServerStatus";
import startUptimeCheckInterval from "./services/uptime";
import { getUptimes, getDomains } from "./redux/selectors";
import AddDomainInputField from "./components/AddDomainInputField";
import "./style.css";

const App = ({ uptimes, domains }) => {
    useEffect(() => {
        startUptimeCheckInterval(domains);
    }, [domains])

    return (
        <div className="container">
            <h1>Uptime Monitor</h1>

            <AddDomainInputField />

            <div className="columns">
                <div>Domain</div>
                <div>Last Checked</div>
                <div>Latency</div>
                <div>Status</div>
            </div>

            {map(uptimes, ({ domain }) => (
                <ServerStatus key={domain} domain={domain} />
            ))}
        </div>
    );
}

const enhance = connect(
    state => ({
        uptimes: getUptimes(state),
        domains: getDomains(state)
    }),
    dispatch => ({})
);

export default enhance(App);
