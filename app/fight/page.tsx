'use client'
import GeneralLayout from "../layouts/general";
import StatPill from "@/components/common/StatPill";
import BattleButton from "../components/Battle";
import useSWR from "swr";
import { multiFetcher } from "@/lib/fetch";
import { Boss } from "@/types";
import Loading from "../components/common/Loading";

export default function Fight(){
    const { data, error, isLoading } = useSWR(["/api/boss/status"], multiFetcher, {
        refreshInterval: 250
    })
    if (error){
        return ( 
            <GeneralLayout title = "Error!">
                {error.desc}
            </GeneralLayout>
        )
    }
    if (isLoading){
        return (
            <Loading/>
        )
    }
    const boss = data![0] as Boss
    
    return (
        <GeneralLayout title = "Fight!">
            { data && 
            <div className = "flex flex-col lg:flex-row gap-7 bg-accent/20 p-4 my-8 md:my-0 rounded-sm">
                <div className = "bg-gray-20 lg:w-5/12 rounded-sm flex flex-col gap-5 justify-center items-center">
                    <img src = {boss.image}/>
                    <div className = "mx-auto">
                        <StatPill>Health: {boss.health} / {boss.maxHealth}</StatPill>
                    </div>
                </div>
                <div className = "text-center lg:text-left flex flex-col lg:w-7/12">
                    <div className = "grow">
                        <h2 className = "mt-0">{boss.name}</h2>
                        <p>{boss.desc}</p>
                        <img className = "mx-auto h-4 md:h-8 my-3" src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/91b633bcae556a5d55141fcb9fcc85ae80a85a8f_ccdiv-removebg-preview.png"/>
                        <p><b className = "text-accent">Strength: </b>{boss.strength}</p>
                        <p><b className = "text-accent">Weakness: </b>{boss.weakness}</p>
                    </div>
                    <BattleButton/>
                </div>
            </div>
            }
        </GeneralLayout> 
    )
}