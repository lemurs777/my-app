import React from 'react';
import styles from "./EventInfo.module.scss";
import {Link} from "react-router-dom";
import clsx from "clsx";
import BestMomentProfile from "../BestMomentProfile";
import {CategoryData, ItemsData} from "../EventsInfo/types";
import Logo1 from "../../assets/images/events-info-live-logo-fc-bayern-x2.min.png";
import Logo2 from "../../assets/images/events-info-live-logo-fc-frankfurt-x2.min.png";
import BackLink from "../BackLink";

import {ReactComponent as AddIcon} from '../../assets/images/svg/events-info-add.svg'

const EventInfo = () => {

    const TeamsInfo = {
        teamOne: {
            name: 'Бавария',
            logo: Logo1,
            yellow: 0,
            red: 0,
            corner: 0,
            shotOnGoal: 0,
            uniformName: 'BMU',
            goals: [{goal: 15}, {goal: 42}, {goal: 68}],
        },
        teamTwo: {
            name: 'Айнтрахт Франкфурт',
            logo: Logo2,
            yellow: 5,
            red: 2,
            corner: 18,
            shotOnGoal: 12,
            uniformName: 'FRA',
            goals: [{goal: 22}, {goal: 52}, {goal: 82}],
        },
        time: 89,
        score: '3 : 2',
        info: '2-й тайм',
    }

    return (
        <div className={styles.eventsInfo}>
            <div className={styles.live}>
                <div className={styles.top}>
                    <div className={styles.top__btns}>
                        <BackLink/>
                        <button className={styles.btnAdd}>
                            <AddIcon/>
                        </button>
                    </div>
                    <div className={styles.topLeft}>
                        <img
                            className={styles.topLogo}
                            src={TeamsInfo.teamOne.logo}
                            alt={TeamsInfo.teamOne.name}
                        />
                        <div className={styles.topName}>{TeamsInfo.teamOne.name}</div>
                        <div className={styles.topStatistics}>
                            <div
                                className={clsx(styles.topStatistic, styles.topStatisticYellow)}
                            >
                                {TeamsInfo.teamOne.yellow}
                            </div>
                            <div
                                className={clsx(styles.topStatistic, styles.topStatisticRed)}
                            >
                                {TeamsInfo.teamOne.red}
                            </div>
                            <div
                                className={clsx(styles.topStatistic, styles.topStatisticCorner)}
                            >
                                {TeamsInfo.teamOne.corner}
                            </div>
                            <div
                                className={clsx(
                                    styles.topStatistic,
                                    styles.topStatisticShotOnGoal
                                )}
                            >
                                {TeamsInfo.teamOne.shotOnGoal}
                            </div>
                        </div>
                    </div>

                    <div className={styles.topCenter}>
                        <div className={styles.topCenterTime}>{TeamsInfo.time}’</div>
                        <div className={styles.topCenterScore}>{TeamsInfo.score}</div>
                        <div className={styles.topCenterHalf}>{TeamsInfo.info}</div>
                    </div>
                    <div className={styles.topRight}>
                        <img
                            className={styles.topLogo}
                            src={TeamsInfo.teamTwo.logo}
                            alt={TeamsInfo.teamTwo.name}
                        />
                        <div className={styles.topName}>{TeamsInfo.teamTwo.name}</div>
                        <div className={styles.topStatistics}>
                            <div
                                className={clsx(styles.topStatistic, styles.topStatisticYellow)}
                            >
                                {TeamsInfo.teamTwo.yellow}
                            </div>
                            <div
                                className={clsx(styles.topStatistic, styles.topStatisticRed)}
                            >
                                {TeamsInfo.teamTwo.red}
                            </div>
                            <div
                                className={clsx(styles.topStatistic, styles.topStatisticCorner)}
                            >
                                {TeamsInfo.teamTwo.corner}
                            </div>
                            <div
                                className={clsx(
                                    styles.topStatistic,
                                    styles.topStatisticShotOnGoal
                                )}
                            >
                                {TeamsInfo.teamTwo.shotOnGoal}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomUniforms}>
                        <div className={styles.bottomUniformName}>
                            {TeamsInfo.teamOne.uniformName}
                        </div>
                        <div className={styles.bottomUniformName}>
                            {TeamsInfo.teamTwo.uniformName}
                        </div>
                    </div>
                    <div className={styles.bottomTimelineWrapper}>
                        <div className={styles.bottomTimeline}>
                            {TeamsInfo.teamOne.goals.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.bottomGoal}
                                    style={{left: `calc(${item.goal}% / .9)`}}
                                ></div>
                            ))}
                            {TeamsInfo.teamTwo.goals.map((item, index) => (
                                <div
                                    key={index}
                                    className={clsx(styles.bottomGoal, styles.bottomGoalBottom)}
                                    style={{left: `calc(${item.goal}% / .9)`}}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventInfo;