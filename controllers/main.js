import { CallDataLists, APIDataItems } from "../utils/CallData.js";
import ListChosen from "../models/ListChosen.js";
import ChoseItem from "../models/ChoseItem.js";
import HandleEvent from "./handleEvents.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const pillTabs = $('#pills-tab');
const itemLists = $('#rederTry');
const hair = $('.hairstyle');
const necklace = $('.necklace');
const shirt = $('.bikinitop');
const dress = $('.bikinibottom');
const handbag = $('.handbag');
const shoes = $('.feet');
const background = $('.background');
const library = $('.library');
const takeShot = $('.takeShot');
const editBtn = $('.editBtn');
const toolBar = $('.toolBar');
const listRender = $("#pills-tab")
const screenTool = $('.setting__list');
const setting = $('.setting');
const fadeoutBtn = $('.fa-caret-down');
const toolItem = $('.tool');
const EditBtn = $('.edit');
const DelBtn = $('.delete');
const MainScreen = $(".contain");
const Screen = $('.screen');

export {listRender,screenTool,pillTabs,itemLists,hair,necklace,shirt,dress,handbag,shoes,background,toolBar,library,takeShot,editBtn,setting,fadeoutBtn,toolItem,EditBtn,DelBtn,MainScreen,Screen};

const callDataLists = new CallDataLists;
const callDataItems = new APIDataItems;
const listChosen = new ListChosen;
const choseItems = new ChoseItem;


callDataLists.getData(getDataLists);


function getDataLists(DataListChosen) {
    console.log(DataListChosen);
    listChosen.AddLists(DataListChosen);
    listChosen.Render("web");
    callDataItems.getData(getDataItem);
};

function getDataItem(dataItems) {
    choseItems.AddItem(dataItems);
    const pillTabType = pillTabs.getElementsByClassName('active')[0].dataset.type;
    choseItems.Render(pillTabType);
};

HandleEvent(listChosen,choseItems);

