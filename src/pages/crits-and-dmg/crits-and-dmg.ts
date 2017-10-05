import { Component } from '@angular/core';
import { AF } from './../../providers/af'


export interface DMG_TABLE {
  roll:string,
  PL:string,
  CH:string,
  HL:string,
  SL:string,
  NA:string
} 

export interface CRIT_TABLE{
  roll:string,
  result:string
}
export interface MODIFICAITIONS{
  minus20:string,
  minus10:string,
  zero:string,
  plus10:string,
  plus20:string
}

@Component({
  selector: 'page-crits-and-dmg',
  templateUrl: 'crits-and-dmg.html',
})
export class CritsAndDmgPage {

  constructor(public af:AF) {
    
  }

  public menuIcon: string = this.af.menuIcon ;

  public currentDmgTable : DMG_TABLE[];

  public currentCritTable : CRIT_TABLE[];

  public currentFailTable : CRIT_TABLE[];

  public selectedDamageTable=''

  public selectedCritTable=''

  public selectedFailTable=''
  
  public failModdifiers:MODIFICAITIONS
  
  public dmgTablesList = [{tableName:'One Handed Slash'},
                          {tableName:'One Handed Blunt'},
                          {tableName:'Two Handed'},
                          {tableName:'Projectile'},
                          {tableName:'Tooth and Claw'},
                          {tableName:'Grappling/Unbalancing'}]

  public critList = [{tableName:'Crush Critical'},
                     {tableName:'Slash Critical'},
                     {tableName:'Puncture Critical'},
                     {tableName:'Unbalance Critical'},
                     {tableName:'Grapling Critical '},
                     {tableName:'Physic Critical to Large Creatures '},
                     {tableName:'Spell Critical to Large Creatures '},
                     {tableName:'Heat Critical '},
                     {tableName:'Cold Critical '},
                     {tableName:'Electricity Critical '},
                     {tableName:'Impact Critical '}]

  public failList=[{tableName:'Hand Weapons Fail'},
                   {tableName:'Projectile Fail'},
                   {tableName:'Spell Fail'},
                   {tableName:'Movement and Maneuver Fail'}]


  showOneHandSlashTable(){
    this.currentDmgTable = [{roll:'  01-08',PL:'Fail',CH:'Fail',HL:'Fail',SL:'Fail',NA:'Fail'},
                            {roll:'  09-35',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  36-40',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  41-45',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  46-50',PL:'1',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  51-55',PL:'1',CH:'1',HL:'0',SL:'0',NA:'0'},
                            {roll:'  56-60',PL:'2',CH:'1',HL:'0',SL:'0',NA:'0'},
                            {roll:'  61-65',PL:'2',CH:'2',HL:'0',SL:'0',NA:'0'},
                            {roll:'  66-70',PL:'3',CH:'3',HL:'2',SL:'3',NA:'0'}, 
                            {roll:'  71-75',PL:'3',CH:'4',HL:'3',SL:'5',NA:'0'}, 
                            {roll:'  76-80',PL:'4',CH:'5',HL:'5',SL:'7A',NA:'7'}, 
                            {roll:'  81-85',PL:'5',CH:'6',HL:'6',SL:'9A',NA:'9A'},
                            {roll:'  86-90',PL:'5',CH:'7',HL:'7A',SL:'10B',NA:'10B'},
                            {roll:'  91-95',PL:'6',CH:'8',HL:'9A',SL:'12B',NA:'11B'},
                            {roll:' 96-100',PL:'6',CH:'9',HL:'10B',SL:'13B',NA:'13C'},
                            {roll:'101-105',PL:'7',CH:'10A',HL:'11B',SL:'14B',NA:'15C'},
                            {roll:'106-110',PL:'8',CH:'11A ',HL:'12B',SL:'15C',NA:'17D'},
                            {roll:'111-115',PL:'8A',CH:'12B',HL:'13C',SL:'17C',NA:'19D'}, 
                            {roll:'116-120',PL:'9A',CH:'13B',HL:'15C',SL:'18D',NA:'20D'},
                            {roll:'121-125',PL:'9A',CH:'13C',HL:'16C',SL:'19D',NA:'21E'},
                            {roll:'126-130',PL:'10B',CH:'14C',HL:'17D',SL:'20D',NA:'23E'},
                            {roll:'131-135',PL:'11B',CH:'15C',HL:'18D',SL:'22D',NA:'25E'},
                            {roll:'136-140',PL:'11C',CH:'16D',HL:'20D',SL:'23E',NA:'27E'},
                            {roll:'141-145',PL:'12D',CH:'17D',HL:'21E',SL:'24E',NA:'28E'},
                            {roll:'146-150',PL:'12E',CH:'18E',HL:'22E',SL:'25E',NA:'30E'}]
  }
  showOneHandBluntTable(){
    this.currentDmgTable = [{roll:'  01-08',PL:'Fail',CH:'Fail',HL:'Fail',SL:'Fail',NA:'Fail'},
                            {roll:'  09-35',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  36-40',PL:'1',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  41-45',PL:'1',CH:'1',HL:'0',SL:'0',NA:'0'},
                            {roll:'  46-50',PL:'2',CH:'2',HL:'0',SL:'0',NA:'0'},
                            {roll:'  51-55',PL:'3',CH:'3',HL:'0',SL:'0',NA:'0'},
                            {roll:'  56-60',PL:'3',CH:'4',HL:'0',SL:'0',NA:'0'},
                            {roll:'  61-65',PL:'4',CH:'5',HL:'0',SL:'0',NA:'0'},
                            {roll:'  66-70',PL:'5',CH:'6',HL:'2',SL:'3',NA:'0'}, 
                            {roll:'  71-75',PL:'5',CH:'4',HL:'3',SL:'5',NA:'0'}, 
                            {roll:'  76-80',PL:'6',CH:'8',HL:'4',SL:'6',NA:'0'}, 
                            {roll:'  81-85',PL:'7',CH:'9',HL:'6',SL:'7A',NA:'6'},
                            {roll:'  86-90',PL:'8',CH:'10',HL:'7A',SL:'8A',NA:'8'},
                            {roll:'  91-95',PL:'8',CH:'11',HL:'8A',SL:'9A',NA:'9A'},
                            {roll:' 96-100',PL:'9',CH:'12A',HL:'9B',SL:'10B',NA:'10B'},
                            {roll:'101-105',PL:'10',CH:'13A',HL:'10B',SL:'11B',NA:'12C'},
                            {roll:'106-110',PL:'10A',CH:'14B',HL:'11B',SL:'12B',NA:'13C'},
                            {roll:'111-115',PL:'11A',CH:'15B',HL:'12C',SL:'13C',NA:'14D'}, 
                            {roll:'116-120',PL:'12B',CH:'16C',HL:'13C',SL:'14C',NA:'15D'},
                            {roll:'121-125',PL:'13B',CH:'17C',HL:'14C',SL:'15C',NA:'17D'},
                            {roll:'126-130',PL:'13C',CH:'18C',HL:'16C',SL:'16D',NA:'18E'},
                            {roll:'131-135',PL:'14D',CH:'19D',HL:'17D',SL:'17D',NA:'19E'},
                            {roll:'136-140',PL:'15D',CH:'20D',HL:'18D',SL:'18E',NA:'21E'},
                            {roll:'141-145',PL:'16D',CH:'21E',HL:'19E',SL:'19E',NA:'22E'},
                            {roll:'146-150',PL:'16E',CH:'22E',HL:'20E',SL:'20E',NA:'23E'}]

  }

  showTwoHandedTable(){
    this.currentDmgTable = [{roll:'  01-08',PL:'Fail',CH:'Fail',HL:'Fail',SL:'Fail',NA:'Fail'},
                            {roll:'  09-55',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  56-60',PL:'2',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  61-65',PL:'3',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  66-70',PL:'4',CH:'3',HL:'0',SL:'6',NA:'0'}, 
                            {roll:'  71-75',PL:'5',CH:'5',HL:'0',SL:'8A',NA:'0'}, 
                            {roll:'  76-80',PL:'6',CH:'7',HL:'2',SL:'10A',NA:'0'}, 
                            {roll:'  81-85',PL:'7',CH:'9',HL:'4A',SL:'13B',NA:'10A'},
                            {roll:'  86-90',PL:'8',CH:'11',HL:'7A',SL:'15B',NA:'13B'},
                            {roll:'  91-95',PL:'9',CH:'12A',HL:'9B',SL:'17C',NA:'16C'},
                            {roll:' 96-100',PL:'11',CH:'14A',HL:'14C',SL:'20C',NA:'19D'},
                            {roll:'101-105',PL:'12A',CH:'16B',HL:'17C',SL:'22C',NA:'22D'},
                            {roll:'106-110',PL:'13A',CH:'18B',HL:'19C',SL:'24C',NA:'25D'},
                            {roll:'111-115',PL:'14B',CH:'20C',HL:'22C',SL:'27D',NA:'28E'}, 
                            {roll:'116-120',PL:'15B',CH:'22C',HL:'24D',SL:'29D',NA:'31E'},
                            {roll:'121-125',PL:'16C',CH:'24C',HL:'27D',SL:'31D',NA:'33E'},
                            {roll:'126-130',PL:'17C',CH:'26D',HL:'29D',SL:'33E',NA:'36E'},
                            {roll:'131-135',PL:'19D',CH:'28D',HL:'32E',SL:'36E',NA:'39E'},
                            {roll:'136-140',PL:'20D',CH:'29E',HL:'34E',SL:'38E',NA:'42E'},
                            {roll:'141-145',PL:'21E',CH:'31E',HL:'37E',SL:'40E',NA:'45E'},
                            {roll:'146-150',PL:'22E',CH:'33E',HL:'40E',SL:'43E',NA:'48E'}]

  }

  showProjectileTabe(){
    this.currentDmgTable = [{roll:'  01-08',PL:'Fail',CH:'Fail',HL:'Fail',SL:'Fail',NA:'Fail'},
                            {roll:'  09-55',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  56-60',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  61-65',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  66-70',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'}, 
                            {roll:'  71-75',PL:'1',CH:'0',HL:'0',SL:'0',NA:'0'}, 
                            {roll:'  76-80',PL:'2',CH:'2',HL:'0',SL:'4',NA:'0'}, 
                            {roll:'  81-85',PL:'3',CH:'4',HL:'3',SL:'6',NA:'0'},
                            {roll:'  86-90',PL:'4',CH:'6',HL:'5',SL:'8A',NA:'0'},
                            {roll:'  91-95',PL:'5',CH:'7',HL:'7A',SL:'10A',NA:'8A'},
                            {roll:' 96-100',PL:'6',CH:'8A',HL:'9A',SL:'12B',NA:'10B'},
                            {roll:'101-105',PL:'7',CH:'10A',HL:'10B',SL:'13B',NA:'11C'},
                            {roll:'106-110',PL:'8A',CH:'13B',HL:'12B',SL:'14B',NA:'13C'},
                            {roll:'111-115',PL:'9A',CH:'14B',HL:'13B',SL:'16C',NA:'15C'}, 
                            {roll:'116-120',PL:'10A',CH:'16B',HL:'15C',SL:'17C',NA:'16D'},
                            {roll:'121-125',PL:'11B',CH:'17C',HL:'17C',SL:'19D',NA:'18D'},
                            {roll:'126-130',PL:'11B',CH:'19C',HL:'19D',SL:'20D',NA:'20D'},
                            {roll:'131-135',PL:'12C',CH:'20D',HL:'21D',SL:'22D',NA:'22E'},
                            {roll:'136-140',PL:'13C',CH:'22D',HL:'23D',SL:'23E',NA:'23E'},
                            {roll:'141-145',PL:'14D',CH:'23E',HL:'25E',SL:'25E',NA:'25E'},
                            {roll:'146-150',PL:'15E',CH:'25E',HL:'26E',SL:'26E',NA:'27E'}]
  }

  showToothAndClawTable(){
    this.currentDmgTable = [{roll:'  01-02',PL:'Fail',CH:'Fail',HL:'Fail',SL:'Fail',NA:'Fail'},
                            {roll:'   3-45',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  46-50',PL:'0',CH:'0',HL:'0',SL:'0',NA:'1'},
                            {roll:'  51-55',PL:'0',CH:'0',HL:'0',SL:'0',NA:'2'},
                            {roll:'  56-60',PL:'1',CH:'0',HL:'0',SL:'1',NA:'4'},
                            {roll:'  61-65',PL:'1',CH:'1',HL:'1',SL:'2',NA:'5T'},
                            {roll:'  66-70',PL:'2',CH:'2',HL:'2',SL:'4',NA:'6T'}, 
                            {roll:'  71-75',PL:'3',CH:'3',HL:'3',SL:'5',NA:'8T'}, 
                            {roll:'  76-80',PL:'4',CH:'4',HL:'5',SL:'7T',NA:'9A'}, 
                            {roll:'  81-85',PL:'5',CH:'5',HL:'7T',SL:'9T',NA:'10A'},
                            {roll:'  86-90',PL:'6',CH:'6T',HL:'8T',SL:'10A',NA:'12A'},
                            {roll:'  91-95',PL:'6T',CH:'7T',HL:'9A',SL:'11A',NA:'13B'},
                            {roll:' 96-100',PL:'7T',CH:'8A',HL:'10A',SL:'12A',NA:'14B'},
                            {roll:'101-105',PL:'7A',CH:'9A',HL:'11A',SL:'13B',NA:'15B'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'SMALL',NA:'ATK'},
                            {roll:'106-110',PL:'8A',CH:'10A',HL:'12B',SL:'15B',NA:'17C'},
                            {roll:'111-115',PL:'9A',CH:'11B',HL:'13C',SL:'16C',NA:'19C'}, 
                            {roll:'116-120',PL:'10B',CH:'11B',HL:'14C',SL:'17C',NA:'20D'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'MED',NA:'ATK'},
                            {roll:'121-125',PL:'14B',CH:'15B',HL:'18C',SL:'20C',NA:'26D'},
                            {roll:'126-130',PL:'16B',CH:'18C',HL:'20C',SL:'23D',NA:'28E'},
                            {roll:'131-135',PL:'18C',CH:'20C',HL:'22D',SL:'25D',NA:'30E'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'LARGE',NA:'ATK'},
                            {roll:'136-140',PL:'20C',CH:'23D',HL:'26D',SL:'30E',NA:'36E'},
                            {roll:'141-145',PL:'22D',CH:'25D',HL:'29E',SL:'33E',NA:'38E'},
                            {roll:'146-150',PL:'24E',CH:'27E',HL:'32E',SL:'36E',NA:'40E'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'HUGE',NA:'ATK'}]

  }

  showGrapplingUnbalancingTable(){
    this.currentDmgTable = [{roll:'  01-02',PL:'Fail',CH:'Fail',HL:'Fail',SL:'Fail',NA:'Fail'},
                            {roll:'   3-45',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  46-50',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  51-55',PL:'0',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  56-60',PL:'1',CH:'0',HL:'0',SL:'0',NA:'0'},
                            {roll:'  61-65',PL:'1',CH:'0',HL:'0',SL:'0',NA:'1'},
                            {roll:'  66-70',PL:'2T',CH:'1',HL:'0',SL:'1',NA:'1'}, 
                            {roll:'  71-75',PL:'2A',CH:'2T',HL:'1',SL:'3',NA:'2'}, 
                            {roll:'  76-80',PL:'3A',CH:'3T',HL:'2',SL:'4T',NA:'4'}, 
                            {roll:'  81-85',PL:'3A',CH:'4A',HL:'4T',SL:'6T',NA:'5'},
                            {roll:'  86-90',PL:'4A',CH:'4A',HL:'5T',SL:'7T',NA:'7T'},
                            {roll:'  91-95',PL:'4A',CH:'5A',HL:'6T',SL:'AA',NA:'8T'},
                            {roll:' 96-100',PL:'5B',CH:'6A',HL:'7A',SL:'9A',NA:'10T'},
                            {roll:'101-105',PL:'5B',CH:'7A',HL:'8A',SL:'10A',NA:'11A'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'SMALL',NA:'ATK'},
                            {roll:'106-110',PL:'6C',CH:'9B',HL:'10A',SL:'12B',NA:'14A'},
                            {roll:'111-115',PL:'7C',CH:'9C',HL:'11B',SL:'13B',NA:'15A'}, 
                            {roll:'116-120',PL:'8C',CH:'10C',HL:'12B',SL:'14C',NA:'18B'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'MED',NA:'ATK'},
                            {roll:'121-125',PL:'10D',CH:'11C',HL:'14B',SL:'16C',NA:'18B'},
                            {roll:'126-130',PL:'11D',CH:'13D',HL:'16C',SL:'18C',NA:'20B'},
                            {roll:'131-135',PL:'12D',CH:'15D',HL:'18C',SL:'20D',NA:'22C'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'LARGE',NA:'ATK'},
                            {roll:'136-140',PL:'14E',CH:'19D',HL:'22C',SL:'26D',NA:'28C'},
                            {roll:'141-145',PL:'16E',CH:'21E',HL:'25D',SL:'28D',NA:'30C'},
                            {roll:'146-150',PL:'18E',CH:'23E',HL:'27E',SL:'30E',NA:'33D'},
                            {roll:'------',PL:'MAX',CH:'DMG',HL:'FOR',SL:'HUGE',NA:'ATK'}]


  }

  showChrushCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Weak grip. No extra damage (+0)'},
                             {roll:'06 - 20',result:'Minor fracture of ribs +5 hits, -5 to activity'},
                             {roll:'21 - 35',result:'Blow to side +4 hits, -40 to ctivity for 1 round'},
                             {roll:'36 - 50',result:'Blow to forearm +5 hits, stunned 1 round'},
                             {roll:'51 - 65',result:'Blow to shield shoulder, breaks shield. If no shield: shoulder broken, arm useless'},
                             {roll:'66 - 79',result:'Blow breaks bonein leg +12 hits , -40 to activity stunned 2 rounds'},
                             {roll:'80',result:'Strike to forehead +30 hits, one eye distroyed, stunned 24 rounds. If no helm: 1 month in coma'},
                             {roll:'81 - 86',result:'Blow breaks weapon arm +8 hits, arm useless, stunned 2 rounds'},
                             {roll:'87 - 89',result:'Shatter knee +9 hits, -60 to activity, knocked down and stunnned 2 rounds'},
                             {roll:'90',result:'Blow to back of neck, paralyzes from the shoulders down. Foe quite stunned'},
                             {roll:'91 - 96',result:'Unconscius for 4 hours due to blow to the side of the head.If no helm: skull crushed +20 hits'},
                             {roll:'97 - 99',result:'Blast to chest sends ribcage through lungs. Drops and dies in 6 rounds. Vicious'},
                             {roll:'100',result:'Blow to jaw, drives boneinto brain, dies instantly'},
                             {roll:'101-106',result:'Blow breaks hip +15 hits,-75 to activity, knocked down and stunnned 3 rounds '},
                             {roll:'107-109',result:'Neck strike crushes throat, cannot breath and stunned for 12 rounds. Por fool then expires'},
                             {roll:'110',result:'Crushes hip +35 hits, stunned for 2 rounds, active the next 4 rounds but then dies of nerve failure'},
                             {roll:'111-116 ',result:'Shatter elbow in weapon arm, arm useless, stunned 3 rounds'},
                             {roll:'117-119',result:'Blow to side crushes chest cavity, drops and dies in 3 rounds'},
                             {roll:'120',result:'Blast to chest area, destroyed heart. Dies immdiately +25 hits. Fine work'}
  ]
  }
  showSlashCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Weak strike. No extra damage (+0)'},
                             {roll:'06 - 20',result:'Minor calf wound, 1 hit per round'},
                             {roll:'21 - 35',result:'Blow to upper leg +5 hits. If no leg armor +2 hits per round'},
                             {roll:'36 - 50',result:'Minor chest wound +3 hits, 1 hits per round and -5 to activity'},
                             {roll:'51 - 65',result:'Minor forearm wound +4 hits, 2 hits per round and stuned 1 round'},
                             {roll:'66 - 79',result:'Meduim thigh wound +6 hits, 1 hit per round. -10 to activity and stunned 2 rounds'},
                             {roll:'80',result:'Neck strike severs carotid artery, neck broken. Dies in 1 round of intense agony'},
                             {roll:'81 - 86',result:'Slash muscle and tendons in weapon arm. Arm useless. +10 hits and 1 hit per round'},
                             {roll:'87 - 89',result:'Destroys one eye +10 hits, stunned 30 rounds'},
                             {roll:'90',result:'Disembowled, dies instantly. 25% chance your weapon is stuck in oponent for 2 rounds'},
                             {roll:'91 - 96',result:'Knocked out for 6 hours with a strike to side of head. If no heal: dies instantly '},
                             {roll:'97 - 99',result:'Sever lower leg 20 hits per roud. Drops and lapses into uncunsciousness'},
                             {roll:'100',result:'Slash side. Down, unconscious and dies in 3 rounds due to masive iinternal damage'},
                             {roll:'101-106',result:'Major abdominal wound +10 hits, 8 hits per round -10 to activity and stunned 4 rounds'},
                             {roll:'107-109',result:'Sever weapon arm 15hits per round. Don and unconscious immediately'},
                             {roll:'110',result:'Impaled in heart. Dies instantly. Heart destroyed. 25% chance your wepon is stuck in foe 3 runds'},
                             {roll:'111-116 ',result:'Sever hand 12 hits per roud. Knocked down ad stunned for 6 rounds'},
                             {roll:'117-119',result:'Sever spine. Colapses immediately. Paralyzed from the neck down permanently. +20 hits'},
                             {roll:'120',result:'Strike to the head destroys the brain and makes life dificult for de unfortunate fool. Expires in a heap immediatly'}
  ]
  }
  showPunctureCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Glancing blow. No extra damagee (+0)'},
                             {roll:'06 - 20',result:'Glancing blow to side +3 hits'},
                             {roll:'21 - 35',result:'Thigh trike +3 hits. If no leg aror: 3 hits per rund '},
                             {roll:'36 - 50',result:'Minor forearm wound +2 hits, stunned 1 round'},
                             {roll:'51 - 65',result:'Strike along side of chst. 1 hit per round nd stunned for 1 round'},
                             {roll:'66 - 79',result:'Strike to lower leg, tendons torn +3 hits.-25 to ctivity and stunned 1 round'},
                             {roll:'80',result:'Strike to neck, nerves and blood vessels severed. Dies of massive heart failure'},
                             {roll:'81 - 86',result:'Strike to wepon arm, bone broken, +10 hits and stunned 3 rounds'},
                             {roll:'87 - 89',result:'Strike through lower leg, sever muscle, -50 to activity and stunned 3 rounds  '},
                             {roll:'90',result:'Strike through both lungs, drops andpasses out. Dies in 6 rounds'},
                             {roll:'91 - 96',result:'Strike to side of head. Knocked out for 6 hour +10 hits. If no helm dies instantly'},
                             {roll:'97 - 99',result:'Strike through neck, break backbone and severs spine. Paralyzed from the neck down, permanently'},
                             {roll:'100',result:'Strie through eye, dies instantly. A real eye full'},
                             {roll:'101-106',result:'Major abdominal wund +10 hits, 6 hits por round. -20 to activity and stunned 4 rounds '},
                             {roll:'107-109',result:'Nailed in lower back. Down and incoscious. Diesfrom internal bleding and shock in 6 rounds'},
                             {roll:'110',result:'Shot through hert. Reels 10 feet to a spot suitable for dying. Weapon stuck in spinning bictim for at least 3 rounds'},
                             {roll:'111-116 ',result:'Strike through leg. Artery severed. Down and unconscious, 12 hits per round'},
                             {roll:'117-119',result:'Strike through kidneys, +9 hits. Knocked down and dies after 6 runds of very itense agony. Sad'},
                             {roll:'120',result:'Shot through both ears. Hearing impaired, dies instantly. Awesome shot'}
  ]
  }
  showUnbalancingCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Faily weak (+0). Zip'},
                             {roll:'06 - 20',result:'Arm strike +2 hits, -5 to activity for 2 rounds'},
                             {roll:'21 - 35',result:'Leg strike +4 hits if no leg armor: +7 hit and stunned 1 round '},
                             {roll:'36 - 50',result:'Chest strike. Knocked back 3 feet +5 hits, -10 to activity for 2 rounds'},
                             {roll:'51 - 65',result:'Blow to shield arrm +5 hits. Shield torn away. If no shield: +8 hits and stunned 2 rounds'},
                             {roll:'66 - 79',result:'Elbow strike. Forearm numbed +8 hits. Drop weapon -10 to activity for 10 rounds'},
                             {roll:'80',result:'Brutl hip strike. Knocked down, tendons torn and joint crushed. Leg useless , -80 to activity'},
                             {roll:'81 - 86',result:'Shot to side. Knocked 5 feet sideways. Drop anything carried in hands. Stunned 3 rounds'},
                             {roll:'87 - 89',result:'Side strike. Stumble unglacefully to an embaracing prone position. Stunned 6 rounds'},
                             {roll:'90',result:'Inspired back strike. Kocked flying 10 feet and onto face. Severe nerve damage, paralyzed from waist down'},
                             {roll:'91 - 96',result:'Hard head strike. Knocked back 10 feet and stunned 6 rounds. If no helm: unconscious for 24 hour'},
                             {roll:'97 - 99',result:'Totally awsome strike. Knocked to knees. If using 1 hand weapon: it is thrown backwards 10 feet. Stunned 15 rounds'},
                             {roll:'100',result:'Upper chest strike. Knocked 10 feet sideways. Fall down and break both arms. 2 monthsin coma '},
                             {roll:'101-106',result:'Blow breaks leg, +12 hits and -50 to activity. Stunned 1 round'},
                             {roll:'107-109',result:'Strike to head. Knocked 10 feet backward, +9 hits. Stunned 6 rounds. If no helm: 4 week coma '},
                             {roll:'110',result:'Savage blow to head. Knocked down, dies in 12 rounds due to a severed vein'},
                             {roll:'111-116 ',result:'Awesome side shot. Knocked down and sideways 5 feet. Lower leg broken, stunned 7 runds and -40 to activity '},
                             {roll:'117-119',result:'Blow to shield shoulder. Stunned 9 rounds -20 to activity. If no shield: unconscious and upper arm shattered'},
                             {roll:'120',result:'Frightening strike to temple. Knocked back 20 feet, dies instantly. Not nice'}
  ]
  }

  showGrapplingCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'An oportunity lost'},
                             {roll:'06 - 20',result:'Passing strike +2 hits'},
                             {roll:'21 - 35',result:'Attack fended off +3 hits. If arm armor: stunned 1 round'},
                             {roll:'36 - 50',result:'Attack to upper leg. Spun abaout, but breaks loose. Stunned 1 round'},
                             {roll:'51 - 65',result:'Shield arm entangled. If shield: -50 to activiry until it is dropped. If no shield: -50 to activity'},
                             {roll:'66 - 79',result:'Weapon arm rasped. Disarmed and wrist sprained. Stunned 2 rounds and -25 to activity'},
                             {roll:'80',result:'Both legs entangled. Down and knocked out, +9 hits'},
                             {roll:'81 - 86',result:'Weapon arm grappled. Ligaments torn anduscle pulled. Disarmed and stunned for 3 rounds. -40 to activity'},
                             {roll:'87 - 89',result:'Completely entngled and immobilized. Knocked down, but still conscious. No activity'},
                             {roll:'90',result:'Vicious hold around neck. Knockedour. Sprained neck, -60 to activity'},
                             {roll:'91 - 96',result:'Head grappled. Stunned 9 rounds. If no helm: a coma results due to  fractured skull'},
                             {roll:'97 - 99',result:'Both arms entangled and pinned to chest. Arms may not be moved until entanglement removed, -75 to activity'},
                             {roll:'100',result:'Neck grappled. If neck armor: -60 to activity due to neck sprained and stunned 3 rounds. If not: dies from broken neck'},
                             {roll:'101-106',result:'Chest grasped. Ribs broken, stunned 5 rounds and -10 to activity.'},
                             {roll:'107-109',result:'Legs entangled ad completely immobilized.Falland break weapon arm. Diarmed and knocked out. +20 hits '},
                             {roll:'110',result:'Neck grappled. If neck armor: disarmed and stunned 5 rounds. If not: dies in 6 rounds'},
                             {roll:'111-116 ',result:'Foot entanged. Stumble, fall, break weapon on impact, and stunned 2 rounds. If no chest armor: take a "D" crush crit'},
                             {roll:'117-119',result:'Both legs wrapped up. Tumbles to ground and knocked out. -80 to activity due to broken arm and broken ankle. +20 hits'},
                             {roll:'120',result:'Windpipe crushed. Dies instantlydue to massive shock and savage asphyxition'}
  ]
  }

  showPhysForLargeCreaturesCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'+10 your weapon breaks in half. You are upset'},
                             {roll:'06 - 20',result:'+6 hits'},
                             {roll:'21 - 35',result:'+12 hits'},
                             {roll:'36 - 50',result:'+18 hits'},
                             {roll:'51 - 65',result:'Staggered by trong blast +20 hits, -10 to ctivity. Stuned 2 rounds'},
                             {roll:'66 - 79',result:'Fine leg strike, +18 hits. 5 hits per round, -20 to activity. Stunned 3 rounds'},
                             {roll:'80',result:'Well placed strike to neck severs the jugular vein, +15 hits. Dies in 6 rounds, but may act at -60 to activity until then'},
                             {roll:'81 - 86',result:'Hard blow, +25. 3 hits per round due to light wound. -10 to activity and stunned 2 rounds'},
                             {roll:'87 - 89',result:'Strike severs artery in leg. May act at -30 to activity for 4 rounds, then drops for 6 rounds, then falls dead'},
                             {roll:'90',result:'Sever a vain in forelimb, +20 hits. Stuned for6 rounds, then falls dead'},
                             {roll:'91 - 96',result:'Strike to leg, +15 hits. -20 to activity, 2 hits per round and stunned 3 rounds'},
                             {roll:'97 - 99',result:'Strike to head. Skull fracture, +30 hits. Knocked out. Fine shot'},
                             {roll:'100',result:'Heart strike. Dies immediately. Weapon stuck and trapped under body. Chance that wepon breaks is (60% - weapon bonus)'},
                             {roll:'101-106',result:'Shatter shoulder in weapon arm, +15 hits and stunned 3 rounds. Arm is quite useless'},
                             {roll:'107-109',result:'Vicious crossing strike. Blinded and upset. Stunned 2 rounds, but then the poor brute can blunder around '},
                             {roll:'110',result:'Strike through cheek. Dies immedialety. Unfortunatly, the weapon is stuck in the bone for 2 rounds'},
                             {roll:'111-116 ',result:'Strike to chin. Jaw shattered. Knocked out, +60 hits. A 1 month coma results'},
                             {roll:'117-119',result:'Strike through the eye. Dies instantly and falls upon attacker, who then takes 20 hits and is pinned for 6 runds'},
                             {roll:'120',result:'Strike through ear destroys brain. Then unfortunate lummox dies instantly, and any ear wax is removed'}
  ]
  }

  showSpellForLargeCreaturesCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Size of creature awes you. (+0)'},
                             {roll:'06 - 20',result:'+5 hits'},
                             {roll:'21 - 35',result:'+8 hits'},
                             {roll:'36 - 50',result:'+10 hits'},
                             {roll:'51 - 65',result:'+12 hits'},
                             {roll:'66 - 79',result:'+15 hits'},
                             {roll:'80',result:'Unbalanced by blast. +15 hits. Stuned 2 rounds'},
                             {roll:'81 - 86',result:'Staggered by strong blast. +20 hits. Stunned 1 round'},
                             {roll:'87 - 89',result:'Strike to leg, +15 hits. -20 to activity and stunned 2 rounds '},
                             {roll:'90',result:'Blast into mouth. Knocked down. A month.long coma results, +30 hits'},
                             {roll:'91 - 96',result:'Spun about by blast. Off balance, +18 hits. -10 to activity and stunned 1 round'},
                             {roll:'97 - 99',result:'Side strike, +25 hits. -20 to activity due to broken ribs and stunned 3 rounds'},
                             {roll:'100',result:'Strike to midsection. Bladder destroyed. Dies in 4 rounds, but is fully active until then'},
                             {roll:'101-106',result:'Head strike. Momentarily confused, +20 hits and stunned 2 rounds '},
                             {roll:'107-109',result:'Blast buckles leg. Severe thigh wounds, +25 hits. Dies in 5 rounds due to nerve damage, but is fully active  '},
                             {roll:'110',result:'Vicious blast. Neck crunched and spine severed. Drops and dies in 3 rounds'},
                             {roll:'111-116 ',result:'Strike to eyes. Blinded or 2 rounds, +15 hits and -20 to activity'},
                             {roll:'117-119',result:'Strike to body destroys a variety of organs. Dies in 3 rounds, but the ignoran brute is fully active until then'},
                             {roll:'120',result:'Superb strike drives rib through heart. Drops and dies in 6 agonizing rounds'}
  ]
  }

  showHeatCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Hot air (+0)'},
                             {roll:'06 - 20',result:'Strong heat, little effect +3 hits'},
                             {roll:'21 - 35',result:'Minor burn +8 hits and 1 hit per round'},
                             {roll:'36 - 50',result:'Blinded by hot smoke +12 hits and stunned 1 round'},
                             {roll:'51 - 65',result:'Clothing catche on fire +12 hits. Taks 2 rounds to extinwish the fire. 8 hits ech round afire'},
                             {roll:'66 - 79',result:'Knocked down by fiery blast. Any organic foot and vcalt covering destroyed, +10 hits'},
                             {roll:'80',result:'Blast to head. Face horribly scarred. Knocked out. +15 hits and 5 hits per round. If no helm: 1 month in coma  '},
                             {roll:'81 - 86',result:'Fire engulfs back. Knocked down. All organic material en back destroyed. 2 hits per round and stunned 1 round'},
                             {roll:'87 - 89',result:'Strike to head. blinded for 6 rounds. Any organic head covering destroyed. If no helm: head hair destroyed'},
                             {roll:'90',result:'Head becomes a charred stump. Sadly, dies instantly due to his unacceptable condition'},
                             {roll:'91 - 96',result:'Shield arm fried. ny shield is destroyed along with hand. Stunned 5 rounds. If no shield: loses arm and knocked out.'},
                             {roll:'97 - 99',result:'Upper leg burn. Use of leg lost due to tissue destruction. 3 hits per round'},
                             {roll:'100',result:'Blast to ck fuses vertebraeand unites skin with clothing. Paralyzed permanently, +25 hits'},
                             {roll:'101-106',result:'Blast to leg. 2 hits per round, -20 to activity. If no leg armor: masive tissue damage, -70 to activity'},
                             {roll:'107-109',result:'Head strike. If helm: blinded for 2 weeks. If not: dies in 6 rounds due to massive shock and brain damage'},
                             {roll:'110',result:'Medsection vaporised. Cut in half and dies. Clothing, armor and all items dstroyed'},
                             {roll:'111-116 ',result:'Blast to chest. Any chest armor destroyed. +12 hits and stunned 3 rounds. If no chest armor: knocked don, 6 hit per round'},
                             {roll:'117-119',result:'Fire engulfsbody. All organic materials on body destroyed.Dies of shock and nerve damage in 6 rounds +25'},
                             {roll:'120',result:'All that remains are charred bits of teeth and bone'}
  ]
  }

  showColdCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Cold breeze (+0)'},
                             {roll:'06 - 20',result:'Cold blast +3 hits. If no clock or armor: stunned 1 round'},
                             {roll:'21 - 35',result:'Frosty "burn" +7 hits. 1 hit per round '},
                             {roll:'36 - 50',result:'Mild frostbite, +5 hits. 2 hits per round and -10 to activity'},
                             {roll:'51 - 65',result:'Cold strike to back +9 hits. 2 hits per round and stunned 2 rounds. All wood on back useless and brittle.'},
                             {roll:'66 - 79',result:'Low blast, stuned 1 round. Any foot covering destroyed. If no foot covering: frostbite, -30 to activity'},
                             {roll:'80',result:'Icy blast to had. A month long coma (and head cold) result. Loses nose as result of severe frostbite and shock'},
                             {roll:'81 - 86',result:'Strike to leg. Knocked down and stuned 3 rounds. If no leg armor: frostbite, lower leg useless and -40 to activity'},
                             {roll:'87 - 89',result:'Strike to neck and collar area. Knocked out. Lose outer ear. If no neck armor: neck is frozen and dies in 9 inactive rounds '},
                             {roll:'90',result:'Blast freeze-dries head. Dies in 2 rounds. Skull and brain are brittle and lifeless'},
                             {roll:'91 - 96',result:'Thigh iced. Broken bone and frostbite. 5 hits per round, -30 to activity and stunned for 4 rounds'},
                             {roll:'97 - 99',result:'Side strike freezes and shatters pelvis. Dies in 12 rounds due to shock and nerve damage'},
                             {roll:'100',result:'Head strike. Eye are frozen. A 3 week coma results. Paralyzed from the neck down'},
                             {roll:'101-106',result:'Blast freezes both hands. Loss us of both arms for 1 hor. 6 hits per round. Stunned for 5 round'},
                             {roll:'107-109',result:'Heart and lungs suddenly frozn. Dies in 6 inactive rounds of shock and soffocation'},
                             {roll:'110',result:'Massive strike shatters chest and freezes precious bodily fluids. Dies in 3 rounds'},
                             {roll:'111-116 ',result:'Icy blast to upper chest. Knocked down and out. If no chest armor: dies in 10 rounds due to a cold, cold heart'},
                             {roll:'117-119',result:'Frozen into a lifeless statue. Well preserved, but quite dead'},
                             {roll:'120',result:'Frozen solid, then shatters nto thousads of pieces after being slammed into the ground'}
  ]
  }

  showElectricityCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Hair stands up (+0)'},
                             {roll:'06 - 20',result:'Light charge, +3 hits. If metal armor: stunned 1 round'},
                             {roll:'21 - 35',result:'Explosion of ligth. Stunned 1 round '},
                             {roll:'36 - 50',result:'Medium charge, +6 hits and -5 to activity. If metal armor: stuned 2 rounds'},
                             {roll:'51 - 65',result:'Heavy charge, +9 hits. -5 to activity, stunned 1 round. If metal armor: stunned 3 rounds'},
                             {roll:'66 - 79',result:'Strike to shield arm, +12 hits and -12 to activity. If metal armor and o shield: knocked out for 1 day'},
                             {roll:'80',result:'Strike to side devastates nervous system. Sever shock results. Victim is a living vegetable 1 month'},
                             {roll:'81 - 86',result:'Strike to weapon arm. Muscle and cartilage mangled. Arm usesless. 2 hits per round and stunned 6 rounds'},
                             {roll:'87 - 89',result:'Permeated by electricity. Entire nervous system rearrenged. Drops and lies in shock for 12 rounds before dying '},
                             {roll:'90',result:'Head strike. If leather helm: it is destroyed anda a 2 wek coma results. If not: dies instantly as brain if fried'},
                             {roll:'91 - 96',result:'Chest strike. If metal armor: it becomes fused and immobile. If not: knocked out for 6 hours'},
                             {roll:'97 - 99',result:'Electrifying experience. Brain falls victim to massive shock and surface burns. Passes out and dies in 6 rounds'},
                             {roll:'100',result:'Nervous system acts as a superconductor. Sad instant death providers all witnesseswith a fine ligth show'},
                             {roll:'101-106',result:'Strike to face. Loses nose. Stunned 8 rounds. Blinded for 2 weeks. If no helm: knocked down as well'},
                             {roll:'107-109',result:'Chest strike destroys heart and lungs. If metal chest armor: it is fused, and dies in 6 rounds. If not: dies instantly'},
                             {roll:'110',result:'Head is no longer available for use. Smokeand ozone surround the lifeless body'},
                             {roll:'111-116 ',result:'Abdomen strike. Stunned 7 rounds. 6 hit per round. If no armor over abdomen: dies of shock and bleeding in 12 rounds'},
                             {roll:'117-119',result:'Chest strike destoys both lung. Cut in half. Charge extends 10 feet giving an "A" critical to anyoe in the way'},
                             {roll:'120',result:'Charge disrupts cell structure. Entire body turned to dust'}
  ]
  }

  showImpactCritTable(){
    this.currentCritTable = [{roll:'-45 - 05',result:'Not even a scratch(+0)'},
                             {roll:'06 - 20',result:'Grazing shot, +5 hits'},
                             {roll:'21 - 35',result:'Staggered by strike to side, +10 hits. Stunned 1 round '},
                             {roll:'36 - 50',result:'Strike to shoulder. Spun about. Reel backwards 10 feet. +12 hits no armor: stunned 2 rounds'},
                             {roll:'51 - 65',result:'Strike to leg, knocked down. +8 hits. If no leg armor: stunned 2 rounds'},
                             {roll:'66 - 79',result:'Blast to shield arm, +12 hits. Shield useless. If no shield: knocked out for 1 day'},
                             {roll:'80',result:'Strike to head, +12 hits. Helm is shattered. Knocked down and out for 1 day. If no helm: skull fractured, dies in 3 rounds'},
                             {roll:'81 - 86',result:'Blow to upper leg. Muscles torn, +15 hits and -10 to activity. If no leg armor: -20 to activity and stunned 3 rounds'},
                             {roll:'87 - 89',result:'Blast to collar area, +12 hits. Stunned  rounds. Cannot speak for 1 week. If no neck armor: voice loss is permanent'},
                             {roll:'90',result:'Strike to neck. Paralyzed from the shoulder down, +20 hits. A melancholy mood descends on victim'},
                             {roll:'91 - 96',result:'Blow to knee. Knee dislocated. Cartilage and tendons ripped, +15 hits. -50 to activity and stunned 9 rounds'},
                             {roll:'97 - 99',result:'Strike abdomen, +18 hits and stunned 12 rounds. If no abdomen armor: dies in 6 rounds due to destroyed organs'},
                             {roll:'100',result:'Blast to head fracturs skull. A 3 week coma results. If no helm: dies immediately'},
                             {roll:'101-106',result:'Blow to jaw. Jaw broken. Cannot speak or eat solid food until healed. +15 hits, -10 to activity and stunned 7 rounds'},
                             {roll:'107-109',result:'Blow to side. Bone is driven into kidneys, dies in 6 runds'},
                             {roll:'110',result:'Disrupt chest.Lungs and heart explode from impact. Dies instantly. Very messy '},
                             {roll:'111-116 ',result:'Spun by blow. Knocked down. Breaks both arms. -60 to activity stunned 3 rounds'},
                             {roll:'117-119',result:'Blast shatters skull in thousands of particles. Dies instantly. Direct hit, fine punch'},
                             {roll:'120',result:'Blast annihilates entire skeleton. Reduced to gelatinous pulp. Try a spatula'}
  ]
  }

  showHandWeaponsFailTable(){
    this.currentFailTable = [{roll:'-45 - 05',result:'Lose your grip. No further activity this round'},
                             {roll:'06 - 20',result:'You slip. If weapon is 1-handed and non-magic, it breaks'},
                             {roll:'21 - 35',result:'Bad follow-through. You lost your opportunity, give yourself 2 hits'},
                             {roll:'36 - 50',result:'Drop your weapon. It will tak 1 round to draw a new one, or 2 rounds to recover old one'},
                             {roll:'51 - 65',result:'You lose your "wind" and realize that you should try to relax, -40 to activity for 2 rounds '},
                             {roll:'66 - 79',result:'You stumble. The classless display leaves you stunned for 2 rounds. With luck, you might still survive'},
                             {roll:'80',result:'Incredibly inept move. Roll a "B" crush crit on yourself. If opponent is using slash weapon, your weapon is broken'},
                             {roll:'81 - 86',result:'Bite and swallow tongu in the excitement. Stunned 2 rounds'},
                             {roll:'87 - 89',result:'Lose your grip on your weapon and realitty. Stunned 3 rounds'},
                             {roll:'90',result:'Bad taste and poor execution. You attempt to maim yourselfe as your weapon breaks. Roll a "C" slash criton yourself'},
                             {roll:'91 - 96',result:'Unbelivable mishandling of your weapon. Any friendly combatant in your vicinity takes a "B" crush critical'},
                             {roll:'97 - 99',result:'Stumble over a unseen imaginary deceased turtle. You are very confused. Stunned 3 rounds'},
                             {roll:'100',result:'Worstmove seen in ages, -60 to activity from a pulled groin. Foe ins stunned 2 rounds laughing'},
                             {roll:'101-106',result:'You stagger and fall in an apparent attempt to commit suicide. Stunned 3 rounds. If using a pole arm, its shaft is shattered'},
                             {roll:'107-109',result:'You break your weapon through ineptness. Stunned 4 rounds'},
                             {roll:'110',result:'You stumble and drive the point of your weapon into the ground. Stunned 5 rounds. If mounted: you pole vault 30 feet and take a "C" crush crit from the landing'},
                             {roll:'111-116 ',result:'Your mount rear suddently, stunned 3 rounds recovering'},
                             {roll:'117-119',result:'You do not coordinate your movement with your mount. -90 to activity for 3 rounds trying to stay mounted'},
                             {roll:'120',result:'You fall off your mount. Roll a "D" crush crit on yourself'}
  ]
  this.failModdifiers={minus20:'1-H Concussion', minus10:'1-H Slashing', zero:'2-Handed', plus10:'Pole Arms', plus20:'Mounted'}
  }

  showMissileWeaponsFailTable(){
    this.currentFailTable = [{roll:'-45 - 05',result:'Lose your grip. No further activity this round'},
                             {roll:'06 - 20',result:"One's ten thumbs cannot handle loading. Lose this round"},
                             {roll:'21 - 35',result:'Fumble ammunitoins. Lose this round. -50 to activity next round'},
                             {roll:'36 - 50',result:'Break ammunition and lose your cool You found yourself at -30 to activity for 3 rounds'},
                             {roll:'51 - 65',result:'Drop ammunition. Stunned this round and next trying to decide wheter to retrive it'},
                             {roll:'66 - 79',result:'You really mishandle your weapon. Stunned 2 rounds'},
                             {roll:'80',result:'Poor judgment. +5 hits to yourself. If no using a crossbow, you let arrow fly, lose an ear and take 2 hits per round'},
                             {roll:'81 - 86',result:'Bowstring breaks. It will take 2 rounds to draw a new weapon or 6 rounds to restring bow'},
                             {roll:'87 - 89',result:'Fumble ammunition when loading. You scatter all of your ammunition over a 10 foot radius area'},
                             {roll:'90',result:'Wepon shatters. You are stunned for 4 rounds. Good luck, pal'},
                             {roll:'91 - 96',result:'You let your arrow fly too much soon. You strike 20 feet shot of trget. You are at -30 to activity for 3 rounds'},
                             {roll:'97 - 99',result:'You seem to think that your bow is a baton. It slips and in trying to recover it, you knock it 5 feet in front of you'},
                             {roll:'100',result:'Your ammunition slips as you fire. The missile goes through your hand. Hand useless, 8 hits to yourself and 2 hits per round'},
                             {roll:'101-106',result:'Slip and fall down. Your shot goes astray. Stunned 5 rounds'},
                             {roll:'107-109',result:'Fletching on missile scratches eye as it is released. 5 hits to yourself, -20 to activity and stunned 2 rounds'},
                             {roll:'110',result:'Tip ofweapon catches closest object and breaks off. If applicabl, object take an "A" puncture crit'},
                             {roll:'111-116 ',result:'Trigger slips hile you are bringing up your weapon. Make an attack with no modifications to closest combatant'},
                             {roll:'117-119',result:'While dydrwaming you put your hand in front of the bolt while firering. Lose a finger, 4 hits to yourself and 2 hits per round'},
                             {roll:'120',result:'You slip and pin your foot to the ground with a bolt. 10 hits to yourself, 2 hits per round, -30 to activity and stunned 3 rounds'}
  ]
  this.failModdifiers={minus20:'Sling', minus10:'Short Bow', zero:'Composite Bow', plus10:'Long Bow', plus20:'Crossbow'}
  }

  showSpellFailTable(){
    this.currentFailTable = [{roll:'-45 - 05',result:'Lose concentration due to strain. Spell Lost, but no power points'},
                             {roll:'06 - 20',result:"Second thoughts. No spell may be cast or prepared next round"},
                             {roll:'21 - 35',result:'Indecision due to mild mental lapse. Spell delayed one round'},
                             {roll:'36 - 50',result:'Serious mental lapse. Spell lost, but not power point. -30 to activity for 3 rounds'},
                             {roll:'51 - 65',result:'Moderate but serious, strain. Spell lost along with power points. Stunned 1 round'},
                             {roll:'66 - 79',result:'Subconscious fear. Spell lost along with power points. Stunned 2 rounds'},
                             {roll:'80',result:'Spell internalized, 15 hits to yourself. Knocked down and stunned 1 hour'},
                             {roll:'81 - 86',result:'Serious strain. Spell lost, but no power points. Stunned 3 rounds'},
                             {roll:'87 - 89',result:'Interlanization; overloaded sense, 20hits to yourself. Blinded and deaf for 10 minutes'},
                             {roll:'90',result:'Strain causes ild stroke. 20 hits to yourself. Knocked out for 12 hours.'},
                             {roll:'91 - 96',result:'Severe strain cases misfire, 5 hits to yourself and stunned 3 rounds'},
                             {roll:'97 - 99',result:"Target's essence causes spell to backfire. Reverse roles of target and caster in spell effects"},
                             {roll:'100',result:'Identity crisis. Lose spell casting capabilities for 2 weeks.'},
                             {roll:'101-106',result:'Extreme mental pressure causes misfire. Knocked down, 10 hits to yourself and stunned 6 rounds'},
                             {roll:'107-109',result:'Internalized spell. Lose all spell casting ability for 3 weeks. 25 hits to yourself and unconscious for 3 hours'},
                             {roll:'110',result:'Strain causes evere stroke. Paralyzed from the waist down'},
                             {roll:'111-116 ',result:'Spell strays and travels to  apoint 20 feet right of the tarjet. Anyone in line take an unmodified attack. Stunned 3 rounds'},
                             {roll:'117-119',result:'Spell strays and travels to  apoint 20 feet left of the tarjet. Anyone in line take an unmodified attack. Stunned 3 rounds'},
                             {roll:'120',result:'Mental collapse. Spell is cast in derection opposite to the intended line. Lose all spell casting ability for 3 months'}
  ]
  this.failModdifiers={minus20:'Class "I" Spells', minus10:'Class "U" Spells', zero:'Class "P" Spells', plus10:'Class "F" Spells', plus20:'Class "E" Spells'}
  }

  showMovingManeuverFailTable(){
    this.currentFailTable = [{roll:'-45 - 05',result:'You hsitate and fail to act'},
                             {roll:'06 - 20',result:"You have secont thoughts, and deide to wait one round"},
                             {roll:'21 - 35',result:'You slip. 30% chance of falling. -20 from any maneuvers for 2 rounds'},
                             {roll:'36 - 50',result:'You stumble. 45% chanco of falling. -30 from any maneuvers for 2 runds'},
                             {roll:'51 - 65',result:'You stub your toe. 60% chanceof falling. 3 hits to yourself and -10 to activity'},
                             {roll:'66 - 79',result:'You slip. 75% chanco of falling. Stunned 2 rounds'},
                             {roll:'80',result:'You twist your ankle. 5 hits to yourself and -10 to activity'},
                             {roll:'81 - 86',result:'You fall down. 3 hits to yourself, -20 to activity for 3 rounds'},
                             {roll:'87 - 89',result:'You sprain your ankle and tear some tendons. 7 hits to yourself, -20 to activity ad stunned 1 round'},
                             {roll:'90',result:'Fall breaks your leg. 8 hits to yourself, -30 to activity and stunned 3 rounds'},
                             {roll:'91 - 96',result:'You break your wrist when you fall. 12 hits to yourself, -20 to activity and stunned 2 rounds'},
                             {roll:'97 - 99',result:"Your arm breks when you land on it. 14 hits to yourself, -30 to activity and stunned 4 rounds"},
                             {roll:'100',result:'In an attempt to break your fall you break both of our arms; they are useless. 30 hits to yourself and stuned 6 rounds'},
                             {roll:'101-106',result:'When you fall your leg twists under you and breaks. 15 hits to yourself, -50 to activity and stunned 3 rounds'},
                             {roll:'107-109',result:'Your knee strikes a hard object and shatters as you fall. 10 hits to yourself, -80 to activity and stunned 4 rounds'},
                             {roll:'110',result:'You fall and the resulting concussion causes a year-long coma.'},
                             {roll:'111-116 ',result:'You fall and land on your lower spine. Yu are paralyzed from the wais down. 30 hits to yourself'},
                             {roll:'117-119',result:'You fall and are paralyzed from the neck down. 20 hits to yourself'},
                             {roll:'120',result:'Your fall turns into a dive. You crush your skull and die'}
  ]
  this.failModdifiers={minus20:'Easy', minus10:'Medium', zero:'Hard', plus10:'Extra Hard', plus20:'Absurd'}
  }

  dmgTableIsLoaded(){
    return (this.currentDmgTable!= undefined )
  }

  critTableIsLoaded(){
    return (this.currentCritTable!= undefined )
  }

  failTableIsLoaded(){
    return (this.currentFailTable!=undefined)
  }

  loadDmgTable(){
    switch (this.selectedDamageTable) {
      case 'One Handed Slash':
        this.showOneHandSlashTable();
        break;
      case 'One Handed Blunt':
        this.showOneHandBluntTable();
        break;
      case 'Two Handed':
        this.showTwoHandedTable();
        break;
      case 'Projectile':
        this.showProjectileTabe();
        break;
      case 'Tooth and Claw':
        this.showToothAndClawTable();
        break;
      case 'Grappling/Unbalancing':
        this.showGrapplingUnbalancingTable();
        break;
      default:
      console.log('Invallid Table')
        break;
    }
  }

  loadCritTable(){
    switch (this.selectedCritTable) {
      case 'Crush Critical':
        this.showChrushCritTable();
        break;
      case 'Slash Critical':
        this.showSlashCritTable();
        break;
      case 'Puncture Critical':
        this.showPunctureCritTable();
        break;
      case 'Unbalance Critical':
        this.showUnbalancingCritTable();
        break;
      case 'Grapling Critical':
        this.showGrapplingCritTable();
        break;
      case 'Physic Critical to Large Creatures ':
        this.showPhysForLargeCreaturesCritTable();
        break;
      case 'Spell Critical to Large Creatures ':
        this.showSpellForLargeCreaturesCritTable();
        break;
      case 'Heat Critical ':
        this.showHeatCritTable();
        break;
      case 'Cold Critical':
        this.showColdCritTable();
        break;
      case 'Electricity Critical':
        this.showElectricityCritTable();
        break;
      case 'Impact Critical':
        this.showImpactCritTable();
        break;
      default:
      console.log('Invallid Table')
        break;
    }
  }

  loadFailTable(){
    switch (this.selectedFailTable) {
      case 'Hand Weapons Fail':
        this.showHandWeaponsFailTable();
        break;
      case 'Projectile Fail':
        this.showMissileWeaponsFailTable();
        break;
      case 'Spell Fail':
        this.showSpellFailTable();
        break;
      case 'Movement and Maneuver Fail':
        this.showMovingManeuverFailTable();
        break;
      default:
      console.log('Invallid Table')
        break;
    }
  }


}
