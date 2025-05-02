'use client';

import ExploreGames from '@/components/explore/ExploreGames';
import ExploreComponents from '@/components/explore/ExploreComponents';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default function ExploreTabs() {
    return (
        <Tabs  defaultIndex={0} className="pt-12">
            <TabList>
                {/* <Tab disabled={true} >EXPLORE {'/'}</Tab> */}
                <Tab default={true} >GAMES</Tab>
                <Tab>COMPONENTS</Tab>
            </TabList>
            {/* <TabPanel>
                <></>
            </TabPanel> */}
            <TabPanel>
                <ExploreGames />
            </TabPanel>
            <TabPanel>
                <ExploreComponents />
            </TabPanel>
        </Tabs>
    )
}
