/**This file is responsible for logging data, 
 * Functions that SHOULD exists: loggData? sendInfo?
 */
import Amplify, { API, Auth, graphqlOperation, Hub } from 'aws-amplify'
import { createPageViews } from '../graphql/mutations'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import DeviceInfo from 'react-native-device-info';
import { browserName, isMobile, isTablet, isDesktop } from 'react-device-detect';
import awsExports from "../aws-exports";
Amplify.configure(awsExports);



export async function getDevice() {
    if (isMobile) {
        return 'Mobile'
    } else if (isDesktop) {
        return 'Desktop'
    } else if (isTablet) {
        return 'Tablet'
    } else {
        return 'Unknown'
    }
}





// Writes to database that user is on this page
// Can get browser info by using this https://github.com/bestiejs/platform.js
export async function sendInfo() {
    var now = new Date;
    var utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    //IP address
    const res = await axios.get('https://geolocation-db.com/json/')
    const ip = res.data.IPv4

    //PagePath
    const pagePath = window.location.pathname


    const device = await getDevice()
    console.log(device)
    const pageView = {
        pagePath: pagePath, timestamp: utc_timestamp,
        userId: '521', ip: ip, browser: browserName, device: device
    }
    console.log(pageView)


    await API.graphql(graphqlOperation(createPageViews, { input: pageView }))
    console.log("Wrote data to DB")


}

export function DisplayIp() {
    const IP = "TBD"

    return (
        <div className=''>
            Your IP Address is: {IP}
        </div>
    )

}