(()=>{"use strict";const e=(e,t)=>{e.textContent=`$${t.toLocaleString("en-GB",{minimumFractionDigits:2})}`},t=(e,t,a)=>{let c;return t||(e.forEach((e=>{e.classList.contains(a)&&(c=e.textContent.slice(0,-1))})),c)},a=(e,t)=>{const a=t/100;return Math.floor(e*a*100)/100},c=(e,t)=>e?t?Math.floor(e/t*100)/100:e.toFixed(2):(0).toFixed(2),l=(e,t,a)=>a?t?((t+e)/a).toFixed(2):(e/a).toFixed(2):Number(e).toFixed(2),r=document.querySelector("#total"),o=document.querySelectorAll(".select-tip-section .percentage"),n=document.querySelector("#custom-percentage"),u=document.querySelector("#people"),s=document.querySelector(".display-tip-amount"),i=document.querySelector(".display-total-amount");document.addEventListener("input",(m=>{if(m.target.matches("input[type='number']")){let m=t(o,n.value,"selected"),d=a(r.value,m),p=c(d,u.value),v=l(Number(r.value),d,u.value);e(s,p),e(i,v)}})),document.addEventListener("click",(m=>{if(m.target.matches(".select-tip-section .percentage")){o.forEach((e=>{e.className="percentage"})),n.value="",m.target.className="percentage selected";let d=t(o,n.value,"selected"),p=a(r.value,d),v=c(p,u.value),g=l(Number(r.value),p,u.value);e(s,v),e(i,g)}m.target.matches("#custom-percentage")&&o.forEach((e=>{e.className="percentage"})),m.target.matches(".reset-btn")&&(o.forEach((e=>{e.className="percentage"})),r.value="",n.value="",u.value="",e(s,0),e(i,0))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sTUNFTUEsRUFBZ0IsQ0FBQ0MsRUFBU0MsS0FDbkNELEVBQVFFLFlBQWMsSUFBSUQsRUFBT0UsZUFBZSxRQUFTLENBQUVDLHNCQUF1QixLQUFNLEVBRy9FQyxFQUFtQixDQUFDQyxFQUFLQyxFQUFPQyxLQUN6QyxJQUFJQyxFQUNKLE9BQUtGLElBQ0RELEVBQUlJLFNBQVFWLElBQ0pBLEVBQVFXLFVBQVVDLFNBQVNKLEtBRTNCQyxFQUFhVCxFQUFRRSxZQUFZVyxNQUFNLEdBQUksR0FDL0MsSUFJR0osRUFHQyxFQ2pCVkssRUZBbUIsQ0FBQ0MsRUFBT04sS0FDekIsTUFBTU8sRUFBTVAsRUFBYSxJQUV6QixPQUFPUSxLQUFLQyxNQUFPSCxFQUFRQyxFQUFPLEtBQU8sR0FBRyxFRUg5Q0YsRUZPbUIsQ0FBQ0ssRUFBV0MsSUFFeEJELEVBSUFDLEVBSUVILEtBQUtDLE1BQU9DLEVBQVlDLEVBQWtCLEtBQU8sSUFIN0MsRUFBWUMsUUFBUSxJQUpwQixHQUFJQSxRQUFRLEdFVnpCUCxFRnFCcUIsQ0FBQ0MsRUFBT0ksRUFBV0MsSUFHakNBLEVBSUFELElBTmdCQSxFQUFZSixHQVVWSyxHQUFnQkMsUUFBUSxJQUhuQ04sRUFBUUssR0FBZ0JDLFFBQVEsR0FKakNDLE9BQU9QLEdBQU9NLFFBQVEsR0VyQm5DRSxFQUFZQyxTQUFTQyxjQUFjLFVBRW5DQyxFQUFtQkYsU0FBU0csaUJBQWlCLG1DQUM3Q0MsRUFBbUJKLFNBQVNDLGNBQWMsc0JBRTFDTCxFQUFpQkksU0FBU0MsY0FBYyxXQUd4Q0ksRUFBYUwsU0FBU0MsY0FBYyx1QkFDcENLLEVBQWVOLFNBQVNDLGNBQWMseUJBRzVDRCxTQUFTTyxpQkFBaUIsU0FBVUMsSUFDaEMsR0FBSUEsRUFBRUMsT0FBT0MsUUFBUSx3QkFBeUIsQ0FFMUMsSUFBSUMsRUFBTTlCLEVBQWlCcUIsRUFBa0JFLEVBQWlCckIsTUFBTyxZQUVqRVksRUFBWUwsRUFBMEJTLEVBQVVoQixNQUFPNEIsR0FDdkRDLEVBQWdCdEIsRUFBMEJLLEVBQVdDLEVBQWViLE9BR3BFOEIsRUFBa0J2QixFQUE0QlEsT0FBT0MsRUFBVWhCLE9BQVFZLEVBQVdDLEVBQWViLE9BR3JHUixFQUFjOEIsRUFBWU8sR0FDMUJyQyxFQUFjK0IsRUFBY08sRUFDaEMsS0FJSmIsU0FBU08saUJBQWlCLFNBQVVDLElBQ2hDLEdBQUlBLEVBQUVDLE9BQU9DLFFBQVEsbUNBQW9DLENBQ3JEUixFQUFpQmhCLFNBQVE0QixJQUNyQkEsRUFBSUMsVUFBWSxZQUFZLElBRWhDWCxFQUFpQnJCLE1BQVEsR0FDekJ5QixFQUFFQyxPQUFPTSxVQUFZLHNCQUlyQixJQUFJSixFQUFNOUIsRUFBaUJxQixFQUFrQkUsRUFBaUJyQixNQUFPLFlBRWpFWSxFQUFZTCxFQUEwQlMsRUFBVWhCLE1BQU80QixHQUN2REMsRUFBZ0J0QixFQUEwQkssRUFBV0MsRUFBZWIsT0FHcEU4QixFQUFrQnZCLEVBQTRCUSxPQUFPQyxFQUFVaEIsT0FBUVksRUFBV0MsRUFBZWIsT0FHckdSLEVBQWM4QixFQUFZTyxHQUMxQnJDLEVBQWMrQixFQUFjTyxFQUNoQyxDQUdJTCxFQUFFQyxPQUFPQyxRQUFRLHVCQUNqQlIsRUFBaUJoQixTQUFRNEIsSUFDckJBLEVBQUlDLFVBQVksWUFBWSxJQUtoQ1AsRUFBRUMsT0FBT0MsUUFBUSxnQkFFakJSLEVBQWlCaEIsU0FBUTRCLElBQ3JCQSxFQUFJQyxVQUFZLFlBQVksSUFJaENoQixFQUFVaEIsTUFBUSxHQUNsQnFCLEVBQWlCckIsTUFBUSxHQUN6QmEsRUFBZWIsTUFBUSxHQUd2QlIsRUFBYzhCLEVBQVksR0FDMUI5QixFQUFjK0IsRUFBYyxHQUNoQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhbGN1bGF0b3IgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIHRpcCBhbW91bnRcclxuICAgIGNvbnN0IGNhbGN1bGF0ZVRpcCA9ICh0b3RhbCwgcGVyY2VudGFnZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bSA9IHBlcmNlbnRhZ2UgLyAxMDA7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh0b3RhbCAqIG51bSkgKiAxMDApIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSB0aXAgcGVyIHBlcnNvblxyXG4gICAgY29uc3QgdGlwUGVyUGVyc29uID0gKHRpcEFtb3VudCwgbnVtYmVyT2ZQZW9wbGUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCF0aXBBbW91bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgwKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFudW1iZXJPZlBlb3BsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRpcEFtb3VudCkudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh0aXBBbW91bnQgLyBudW1iZXJPZlBlb3BsZSkgKiAxMDApIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBwZXIgcGVyc29uXHJcbiAgICBjb25zdCB0b3RhbFBlclBlcnNvbiA9ICh0b3RhbCwgdGlwQW1vdW50LCBudW1iZXJPZlBlb3BsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUGx1c1RpcCA9IHRpcEFtb3VudCArIHRvdGFsO1xyXG5cclxuICAgICAgICBpZiAoIW51bWJlck9mUGVvcGxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodG90YWwpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRpcEFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRvdGFsIC8gbnVtYmVyT2ZQZW9wbGUpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHRvdGFsUGx1c1RpcCAvIG51bWJlck9mUGVvcGxlKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGNhbGN1bGF0ZVRpcCwgdGlwUGVyUGVyc29uLCB0b3RhbFBlclBlcnNvbiB9O1xyXG5cclxufTtcclxuXHJcbi8vIGZvciB0ZXN0aW5nIHdpdGggamVzdFxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNhbGN1bGF0b3I7IiwiXHJcbi8vIGRpc3BsYXkgYW1vdW50IGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5QW1vdW50ID0gKGVsZW1lbnQsIGFtb3VudCkgPT4ge1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAkJHthbW91bnQudG9Mb2NhbGVTdHJpbmcoXCJlbi1HQlwiLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KX1gO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGlwUGVyY2VudGFnZSA9IChhcnIsIHZhbHVlLCBzdHlsZSkgPT4ge1xyXG4gICAgbGV0IHBlcmNlbnRhZ2U7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGdldCBvbmx5IHRoZSBudW1iZXJcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBlbGVtZW50LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbGN1bGF0b3IgfSBmcm9tIFwiLi9jYWxjdWxhdG9yXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlBbW91bnQsIGdldFRpcFBlcmNlbnRhZ2UgfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcbmNvbnN0IG15Q2FsY3VsYXRvciA9IGNhbGN1bGF0b3IoKTtcclxuXHJcblxyXG4vLyB0b3RhbCBhbW91bnQgaW5wdXQgLSB0byBnZXQgdG90YWxcclxuY29uc3QgYmlsbFRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbFwiKTtcclxuLy8gcGVyY2VudGFnZSBkaXYgc2VsZWN0ZWQgb3IgY3VzdG9tIG51bWJlciBpbnB1dCAtIHRvIGdldCBwZXJjZW50YWdlXHJcbmNvbnN0IHBlcmNlbnRhZ2VTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdC10aXAtc2VjdGlvbiAucGVyY2VudGFnZVwiKTtcclxuY29uc3QgY3VzdG9tUGVyY2VudGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tLXBlcmNlbnRhZ2VcIik7XHJcbi8vIG51bWJlciBvZiBwZW9wbGUgaW5wdXRcclxuY29uc3QgbnVtYmVyT2ZQZW9wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blb3BsZVwiKTtcclxuXHJcbi8vIGRpc3BsYXkgdG90YWxzXHJcbmNvbnN0IGRpc3BsYXlUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdGlwLWFtb3VudFwiKTtcclxuY29uc3QgZGlzcGxheVRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRvdGFsLWFtb3VudFwiKTtcclxuXHJcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIGNhbGN1bGF0ZSBhbW91bnQgd2hlbiBudW1iZXIgaW5wdXRzIGFyZSB1c2VkXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJpbnB1dFt0eXBlPSdudW1iZXInXVwiKSkge1xyXG4gICAgICAgIC8vIGNhbHVsYXRlIHRpcCBwcCBcclxuICAgICAgICBsZXQgdGlwID0gZ2V0VGlwUGVyY2VudGFnZShwZXJjZW50YWdlU2VsZWN0LCBjdXN0b21QZXJjZW50YWdlLnZhbHVlLCBcInNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICBsZXQgdGlwQW1vdW50ID0gbXlDYWxjdWxhdG9yLmNhbGN1bGF0ZVRpcChiaWxsVG90YWwudmFsdWUsIHRpcCk7XHJcbiAgICAgICAgbGV0IGNhbGN1bGF0ZWRUaXAgPSBteUNhbGN1bGF0b3IudGlwUGVyUGVyc29uKHRpcEFtb3VudCwgbnVtYmVyT2ZQZW9wbGUudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdG90YWwgcHBcclxuICAgICAgICBsZXQgY2FsY3VsYXRlZFRvdGFsID0gbXlDYWxjdWxhdG9yLnRvdGFsUGVyUGVyc29uKE51bWJlcihiaWxsVG90YWwudmFsdWUpLCB0aXBBbW91bnQsIG51bWJlck9mUGVvcGxlLnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGRpc3BsYXlcclxuICAgICAgICBkaXNwbGF5QW1vdW50KGRpc3BsYXlUaXAsIGNhbGN1bGF0ZWRUaXApO1xyXG4gICAgICAgIGRpc3BsYXlBbW91bnQoZGlzcGxheVRvdGFsLCBjYWxjdWxhdGVkVG90YWwpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIHNlbGVjdCBwZXJjZW50YWdlIGFkZCBjbGFzcyBvbiBjbGlja1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnNlbGVjdC10aXAtc2VjdGlvbiAucGVyY2VudGFnZVwiKSkge1xyXG4gICAgICAgIHBlcmNlbnRhZ2VTZWxlY3QuZm9yRWFjaChkaXYgPT4ge1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJwZXJjZW50YWdlXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3VzdG9tUGVyY2VudGFnZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9IFwicGVyY2VudGFnZSBzZWxlY3RlZFwiO1xyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdG90YWxzXHJcblxyXG4gICAgICAgIGxldCB0aXAgPSBnZXRUaXBQZXJjZW50YWdlKHBlcmNlbnRhZ2VTZWxlY3QsIGN1c3RvbVBlcmNlbnRhZ2UudmFsdWUsIFwic2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIGxldCB0aXBBbW91bnQgPSBteUNhbGN1bGF0b3IuY2FsY3VsYXRlVGlwKGJpbGxUb3RhbC52YWx1ZSwgdGlwKTtcclxuICAgICAgICBsZXQgY2FsY3VsYXRlZFRpcCA9IG15Q2FsY3VsYXRvci50aXBQZXJQZXJzb24odGlwQW1vdW50LCBudW1iZXJPZlBlb3BsZS52YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBwcFxyXG4gICAgICAgIGxldCBjYWxjdWxhdGVkVG90YWwgPSBteUNhbGN1bGF0b3IudG90YWxQZXJQZXJzb24oTnVtYmVyKGJpbGxUb3RhbC52YWx1ZSksIHRpcEFtb3VudCwgbnVtYmVyT2ZQZW9wbGUudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgZGlzcGxheVxyXG4gICAgICAgIGRpc3BsYXlBbW91bnQoZGlzcGxheVRpcCwgY2FsY3VsYXRlZFRpcCk7XHJcbiAgICAgICAgZGlzcGxheUFtb3VudChkaXNwbGF5VG90YWwsIGNhbGN1bGF0ZWRUb3RhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNlbGVjdGluZyBjdXN0b20gcGVyY2V0YWdlIHJlbW92ZXMgc2VsZWN0ZWQgcGVyY2VudGFnZVxyXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjY3VzdG9tLXBlcmNlbnRhZ2VcIikpIHtcclxuICAgICAgICBwZXJjZW50YWdlU2VsZWN0LmZvckVhY2goZGl2ID0+IHtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwicGVyY2VudGFnZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyByZXNldCBidXR0b25cclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnJlc2V0LWJ0blwiKSkge1xyXG4gICAgICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzc1xyXG4gICAgICAgIHBlcmNlbnRhZ2VTZWxlY3QuZm9yRWFjaChkaXYgPT4ge1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJwZXJjZW50YWdlXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGlucHV0IHZhbHVlc1xyXG4gICAgICAgIGJpbGxUb3RhbC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGN1c3RvbVBlcmNlbnRhZ2UudmFsdWUgPSAnJztcclxuICAgICAgICBudW1iZXJPZlBlb3BsZS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAvLyBkaXNwbGF5IHRvdGFsc1xyXG4gICAgICAgIGRpc3BsYXlBbW91bnQoZGlzcGxheVRpcCwgMC4wMCk7XHJcbiAgICAgICAgZGlzcGxheUFtb3VudChkaXNwbGF5VG90YWwsIDAuMDApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZGlzcGxheUFtb3VudCIsImVsZW1lbnQiLCJhbW91bnQiLCJ0ZXh0Q29udGVudCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZ2V0VGlwUGVyY2VudGFnZSIsImFyciIsInZhbHVlIiwic3R5bGUiLCJwZXJjZW50YWdlIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2xpY2UiLCJteUNhbGN1bGF0b3IiLCJ0b3RhbCIsIm51bSIsIk1hdGgiLCJmbG9vciIsInRpcEFtb3VudCIsIm51bWJlck9mUGVvcGxlIiwidG9GaXhlZCIsIk51bWJlciIsImJpbGxUb3RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBlcmNlbnRhZ2VTZWxlY3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VzdG9tUGVyY2VudGFnZSIsImRpc3BsYXlUaXAiLCJkaXNwbGF5VG90YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJ0aXAiLCJjYWxjdWxhdGVkVGlwIiwiY2FsY3VsYXRlZFRvdGFsIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==