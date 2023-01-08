(()=>{"use strict";const e=(e,t)=>{e.textContent=`$ ${t.toLocaleString("en-GB",{minimumFractionDigits:2})}`},t=(e,t)=>{const c=t/100;return Math.floor(e*c*100)/100},c=(e,t)=>t?Math.floor(e/t*100)/100:e.toFixed(2),o=(e,t,c)=>c&&t?((t+e)/c).toFixed(2):Number(e).toFixed(2),a=document.querySelector("#total"),l=document.querySelectorAll(".select-tip-section div"),n=document.querySelector("#custom-percentage"),r=document.querySelector("#people"),u=document.querySelector(".display-tip-amount"),s=document.querySelector(".display-total-amount");document.addEventListener("input",(i=>{if(i.target.matches("input[type='number']")){let i=((e,t,c)=>{let o;return t||(e.forEach((e=>{e.classList.contains("selected")&&(o=e.textContent.slice(0,-1))})),o)})(l,n.value);console.log(i);let m=t(a.value,i),d=c(m,r.value),p=o(Number(a.value),m,r.value);e(u,d),e(s,p)}})),document.addEventListener("click",(e=>{e.target.matches(".select-tip-section div")&&(l.forEach((e=>{e.className=""})),n.value="",e.target.className="selected"),e.target.matches("#custom-percentage")&&l.forEach((e=>{e.className=""}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sTUNFTUEsRUFBZ0IsQ0FBQ0MsRUFBU0MsS0FDbkNELEVBQVFFLFlBQWMsS0FBS0QsRUFBT0UsZUFBZSxRQUFTLENBQUVDLHNCQUF1QixLQUFNLEVDQXZGQyxFRkFtQixDQUFDQyxFQUFPQyxLQUN6QixNQUFNQyxFQUFNRCxFQUFhLElBRXpCLE9BQU9FLEtBQUtDLE1BQU9KLEVBQVFFLEVBQU8sS0FBTyxHQUFHLEVFSDlDSCxFRk9tQixDQUFDTSxFQUFXQyxJQUN4QkEsRUFJRUgsS0FBS0MsTUFBT0MsRUFBWUMsRUFBa0IsS0FBTyxJQUg3QyxFQUFZQyxRQUFRLEdFVGpDUixFRmdCcUIsQ0FBQ0MsRUFBT0ssRUFBV0MsSUFHakNBLEdBQW1CRCxJQUZIQSxFQUFZTCxHQU1WTSxHQUFnQkMsUUFBUSxHQUhwQ0MsT0FBT1IsR0FBT08sUUFBUSxHRWhCbkNFLEVBQVlDLFNBQVNDLGNBQWMsVUFFbkNDLEVBQW1CRixTQUFTRyxpQkFBaUIsMkJBQzdDQyxFQUFtQkosU0FBU0MsY0FBYyxzQkFFMUNMLEVBQWlCSSxTQUFTQyxjQUFjLFdBR3hDSSxFQUFhTCxTQUFTQyxjQUFjLHVCQUNwQ0ssRUFBZU4sU0FBU0MsY0FBYyx5QkFHNUNELFNBQVNPLGlCQUFpQixTQUFVQyxJQUNoQyxHQUFJQSxFQUFFQyxPQUFPQyxRQUFRLHdCQUF5QixDQUUxQyxJQUFJQyxFRGhCb0IsRUFBQ0MsRUFBS0MsRUFBT0MsS0FDekMsSUFBSXZCLEVBQ0osT0FBS3NCLElBQ0RELEVBQUlHLFNBQVEvQixJQUNKQSxFQUFRZ0MsVUFBVUMsU0NZMkMsY0RWN0QxQixFQUFhUCxFQUFRRSxZQUFZZ0MsTUFBTSxHQUFJLEdBQy9DLElBSUczQixFQUdDLEVDRUU0QixDQUFpQmpCLEVBQWtCRSxFQUFpQlMsT0FDOURPLFFBQVFDLElBQUlWLEdBQ1osSUFBSWhCLEVBQVlOLEVBQTBCVSxFQUFVYyxNQUFPRixHQUN2RFcsRUFBZ0JqQyxFQUEwQk0sRUFBV0MsRUFBZWlCLE9BR3BFVSxFQUFrQmxDLEVBQTRCUyxPQUFPQyxFQUFVYyxPQUFRbEIsRUFBV0MsRUFBZWlCLE9BR3JHOUIsRUFBY3NCLEVBQVlpQixHQUMxQnZDLEVBQWN1QixFQUFjaUIsRUFDaEMsS0FJSnZCLFNBQVNPLGlCQUFpQixTQUFVQyxJQUM1QkEsRUFBRUMsT0FBT0MsUUFBUSw2QkFDakJSLEVBQWlCYSxTQUFRUyxJQUNyQkEsRUFBSUMsVUFBWSxFQUFFLElBRXRCckIsRUFBaUJTLE1BQVEsR0FDekJMLEVBQUVDLE9BQU9nQixVQUFZLFlBR3JCakIsRUFBRUMsT0FBT0MsUUFBUSx1QkFDakJSLEVBQWlCYSxTQUFRUyxJQUNyQkEsRUFBSUMsVUFBWSxFQUFFLEdBRXpCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAvLi9zcmMvY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RpcC1jYWxjdWxhdG9yLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2FsY3VsYXRvciA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgdGlwIGFtb3VudFxyXG4gICAgY29uc3QgY2FsY3VsYXRlVGlwID0gKHRvdGFsLCBwZXJjZW50YWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtID0gcGVyY2VudGFnZSAvIDEwMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHRvdGFsICogbnVtKSAqIDEwMCkgLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIHRpcCBwZXIgcGVyc29uXHJcbiAgICBjb25zdCB0aXBQZXJQZXJzb24gPSAodGlwQW1vdW50LCBudW1iZXJPZlBlb3BsZSkgPT4ge1xyXG4gICAgICAgIGlmICghbnVtYmVyT2ZQZW9wbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aXBBbW91bnQpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodGlwQW1vdW50IC8gbnVtYmVyT2ZQZW9wbGUpICogMTAwKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgdG90YWwgcGVyIHBlcnNvblxyXG4gICAgY29uc3QgdG90YWxQZXJQZXJzb24gPSAodG90YWwsIHRpcEFtb3VudCwgbnVtYmVyT2ZQZW9wbGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbFBsdXNUaXAgPSB0aXBBbW91bnQgKyB0b3RhbDtcclxuXHJcbiAgICAgICAgaWYgKCFudW1iZXJPZlBlb3BsZSB8fCAhdGlwQW1vdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodG90YWwpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHRvdGFsUGx1c1RpcCAvIG51bWJlck9mUGVvcGxlKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGNhbGN1bGF0ZVRpcCwgdGlwUGVyUGVyc29uLCB0b3RhbFBlclBlcnNvbiB9O1xyXG5cclxufTtcclxuXHJcbi8vIGZvciB0ZXN0aW5nIHdpdGggamVzdFxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNhbGN1bGF0b3I7IiwiXHJcbi8vIGRpc3BsYXkgYW1vdW50IGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5QW1vdW50ID0gKGVsZW1lbnQsIGFtb3VudCkgPT4ge1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAkICR7YW1vdW50LnRvTG9jYWxlU3RyaW5nKFwiZW4tR0JcIiwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpcFBlcmNlbnRhZ2UgPSAoYXJyLCB2YWx1ZSwgc3R5bGUpID0+IHtcclxuICAgIGxldCBwZXJjZW50YWdlO1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgb25seSB0aGUgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gZWxlbWVudC50ZXh0Q29udGVudC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBjYWxjdWxhdG9yIH0gZnJvbSBcIi4vY2FsY3VsYXRvclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5QW1vdW50LCBnZXRUaXBQZXJjZW50YWdlIH0gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5jb25zdCBteUNhbGN1bGF0b3IgPSBjYWxjdWxhdG9yKCk7XHJcblxyXG5cclxuLy8gdG90YWwgYW1vdW50IGlucHV0IC0gdG8gZ2V0IHRvdGFsXHJcbmNvbnN0IGJpbGxUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWxcIik7XHJcbi8vIHBlcmNlbnRhZ2UgZGl2IHNlbGVjdGVkIG9yIGN1c3RvbSBudW1iZXIgaW5wdXQgLSB0byBnZXQgcGVyY2VudGFnZVxyXG5jb25zdCBwZXJjZW50YWdlU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3QtdGlwLXNlY3Rpb24gZGl2XCIpO1xyXG5jb25zdCBjdXN0b21QZXJjZW50YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b20tcGVyY2VudGFnZVwiKTtcclxuLy8gbnVtYmVyIG9mIHBlb3BsZSBpbnB1dFxyXG5jb25zdCBudW1iZXJPZlBlb3BsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVvcGxlXCIpO1xyXG5cclxuLy8gZGlzcGxheSB0b3RhbHNcclxuY29uc3QgZGlzcGxheVRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS10aXAtYW1vdW50XCIpO1xyXG5jb25zdCBkaXNwbGF5VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdG90YWwtYW1vdW50XCIpO1xyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXIgdG8gY2FsY3VsYXRlIGFtb3VudCB3aGVuIG51bWJlciBpbnB1dHMgYXJlIHVzZWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcImlucHV0W3R5cGU9J251bWJlciddXCIpKSB7XHJcbiAgICAgICAgLy8gY2FsdWxhdGUgdGlwIHBwIFxyXG4gICAgICAgIGxldCB0aXAgPSBnZXRUaXBQZXJjZW50YWdlKHBlcmNlbnRhZ2VTZWxlY3QsIGN1c3RvbVBlcmNlbnRhZ2UudmFsdWUsIFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGlwKTtcclxuICAgICAgICBsZXQgdGlwQW1vdW50ID0gbXlDYWxjdWxhdG9yLmNhbGN1bGF0ZVRpcChiaWxsVG90YWwudmFsdWUsIHRpcCk7XHJcbiAgICAgICAgbGV0IGNhbGN1bGF0ZWRUaXAgPSBteUNhbGN1bGF0b3IudGlwUGVyUGVyc29uKHRpcEFtb3VudCwgbnVtYmVyT2ZQZW9wbGUudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdG90YWwgcHBcclxuICAgICAgICBsZXQgY2FsY3VsYXRlZFRvdGFsID0gbXlDYWxjdWxhdG9yLnRvdGFsUGVyUGVyc29uKE51bWJlcihiaWxsVG90YWwudmFsdWUpLCB0aXBBbW91bnQsIG51bWJlck9mUGVvcGxlLnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGRpc3BsYXlcclxuICAgICAgICBkaXNwbGF5QW1vdW50KGRpc3BsYXlUaXAsIGNhbGN1bGF0ZWRUaXApO1xyXG4gICAgICAgIGRpc3BsYXlBbW91bnQoZGlzcGxheVRvdGFsLCBjYWxjdWxhdGVkVG90YWwpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIHNlbGVjdCBwZXJjZW50YWdlIGFkZCBjbGFzcyBvbiBjbGlja1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnNlbGVjdC10aXAtc2VjdGlvbiBkaXZcIikpIHtcclxuICAgICAgICBwZXJjZW50YWdlU2VsZWN0LmZvckVhY2goZGl2ID0+IHtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3VzdG9tUGVyY2VudGFnZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwic2VsZWN0ZWRcIjtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjY3VzdG9tLXBlcmNlbnRhZ2VcIikpIHtcclxuICAgICAgICBwZXJjZW50YWdlU2VsZWN0LmZvckVhY2goZGl2ID0+IHtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJkaXNwbGF5QW1vdW50IiwiZWxlbWVudCIsImFtb3VudCIsInRleHRDb250ZW50IiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJteUNhbGN1bGF0b3IiLCJ0b3RhbCIsInBlcmNlbnRhZ2UiLCJudW0iLCJNYXRoIiwiZmxvb3IiLCJ0aXBBbW91bnQiLCJudW1iZXJPZlBlb3BsZSIsInRvRml4ZWQiLCJOdW1iZXIiLCJiaWxsVG90YWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwZXJjZW50YWdlU2VsZWN0IiwicXVlcnlTZWxlY3RvckFsbCIsImN1c3RvbVBlcmNlbnRhZ2UiLCJkaXNwbGF5VGlwIiwiZGlzcGxheVRvdGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJtYXRjaGVzIiwidGlwIiwiYXJyIiwidmFsdWUiLCJzdHlsZSIsImZvckVhY2giLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNsaWNlIiwiZ2V0VGlwUGVyY2VudGFnZSIsImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdGVkVGlwIiwiY2FsY3VsYXRlZFRvdGFsIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==