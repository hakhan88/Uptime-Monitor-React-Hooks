import axios from "axios";
import { setUptime } from "../redux/actions";

const checkUptime = async domains => {
    for (const domain of domains) {
        /**
         * This endpoint is a dummy endpoint we have implemented for the purpose of this challenge.
         *
         * Some gotchas that you should know:
         *
         * - Any domain that starts with "pass___" always returns 'status: OK'
         * - Any domain that starts with "fail___" always returns 'status: FAILED'
         * - All other domains return a status of OK vs FAILED randomly
         */
        const url = `https://uptime-checker.tryprospect.repl.co/status?domain=${domain}`;
        try {
            const response = await axios.get(url);
            setUptime(response.data);
        } catch (e) {
        }
    }

    setTimeout(() => checkUptime(domains), 5000);
};

export default domains => {
    checkUptime(domains);
};
