"use client"
import React, { useState } from 'react';
import './styles.css'; 
import Image from 'next/image';
import { Sidebar } from './sidebar';
import { useRouter } from 'next/navigation';

export const Header = () => {
    const router = useRouter();

    const [sidebarFolder, setSidebarFolder] = useState('HOME');

    return (
        <div>
        <div className="header">  
            <Image className='icon_button' src="/yggsadril.png" alt ='world tree icon' width = {60} height = {60} onClick={() => router.push('/tree')} />
            <h1>Yggdrasil</h1>
            <button className='searchbar'>SearchBar</button>
            <button className='header_button' onClick={()=> setSidebarFolder('campaign')}>Campaign</button>
            <button className='header_button' onClick={()=> setSidebarFolder('characters')}>Characters</button>
            <button className='header_button' onClick={()=> setSidebarFolder('community')}>Community</button>
            <button className='header_button' onClick={()=> setSidebarFolder('content')}>Content</button>
            <button className='header_button' onClick={()=> setSidebarFolder('creations')}>Creations</button>
                <Image className='icon_button' src={'./quill.svg'} alt = 'quill' width = {40} height={40}/>
                <Image className='icon_button' src={'./scroll.svg'} alt = 'quill' width = {40} height={40}/>
                <Image className='icon_button' src={'./gold.svg'} alt = 'quill' width = {40} height={40}/>
                <Image className='icon_button' src={'./store.svg'} alt = 'quill' width = {40} height={40}/>
        </div>
        <div>
        <Sidebar path={sidebarFolder}/>
        </div>
        </div>
    );
};

