const APIDataList = "https://60ea64be5dd7ff0017b3975c.mockapi.io/navPills";
const APIDataItem = "https://60ea64be5dd7ff0017b3975c.mockapi.io/tabPanes";
function CallDataLists() {
    this.getData = (callback) => {
        fetch(APIDataList).then((response)=>{
            return response.json();
        }).then(callback).catch((error)=>{
            alert(error);
        })
    }
}

function APIDataItems() {
    this.getData = (callback) => {
        fetch(APIDataItem).then((response)=>{
            return response.json();
        }).then(callback).catch((error)=>{
            alert(error);
        })
    }
}

export {CallDataLists,APIDataItems};