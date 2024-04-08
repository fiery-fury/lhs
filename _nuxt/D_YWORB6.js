import{f as e,h as t,j as A,t as a,M as n,N as S,O as c,P as p,Q as r,m as Q,k as g,l as E,J as k,R as m,S as w}from"./Bf8FQntB.js";import{_ as V}from"./BhfrZdwh.js";import{u as v}from"./8OmGqMQJ.js";const U=A("hr",{class:"border-lhs-orange-dark mt-2 mb-3"},null,-1),K={__name:"Content",props:{title:{type:String,default:null},titleClassName:{type:String,default:null},className:{type:String,default:"border-content-orange"}},setup(C){return(B,I)=>(e(),t("div",{class:n(["nearest-neighbor p-10",C.className])},[A("h2",{class:n(["text-4xl uppercase",C.titleClassName])},a(C.title),3),U,A("p",null,[S(B.$slots,"default")])],2))}},F=A("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"})],-1),f=[F],H={__name:"Mobile",props:{className:{type:String,default:null}},setup(C){return(B,I)=>(e(),t("span",{class:n(C.className)},f,2))}},Y=A("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})],-1),D=[Y],G={__name:"Email",props:{className:{type:String,default:null}},setup(C){return(B,I)=>(e(),t("span",{class:n(C.className)},D,2))}},P={class:"py-8"},x={class:"grid grid-cols-1 md:grid-cols-2"},q={class:"pb-8 md:pb-0"},y=A("h3",{class:"mb-4 text-3xl uppercase"},"Links",-1),X={class:"flex flex-col gap-2"},N=A("h3",{class:"mb-4 text-3xl uppercase"},"Contact",-1),T={class:"flex flex-col gap-2"},O={class:"border-b-2 border-transparent group-hover:border-lhs-red"},b={class:"mt-8"},z=A("hr",{class:"my-4"},null,-1),j={class:"text-center"},L={__name:"Footer",setup(C){const{$navLinks:B,$contactLinks:I}=k();return(o,h)=>{const s=V,u=H,R=G;return e(),t("footer",P,[A("div",x,[A("div",q,[y,A("ul",X,[(e(!0),t(c,null,p(r(B),({title:l,href:i})=>(e(),t("li",null,[g(s,{to:i,target:"_blank",class:"border-b-2 border-transparent hover:border-lhs-red"},{default:E(()=>[Q(a(l),1)]),_:2},1032,["to"])]))),256))])]),A("div",null,[N,A("ul",T,[(e(!0),t(c,null,p(r(I),({title:l,href:i,icon:d})=>(e(),t("li",null,[g(s,{to:i,target:"_blank",class:"flex items-center group"},{default:E(()=>[d==="IconsMobile"?(e(),m(u,{key:0,className:"me-3"})):w("",!0),d==="IconsEmail"?(e(),m(R,{key:1,className:"me-3"})):w("",!0),A("p",O,a(l),1)]),_:2},1032,["to"])]))),256))])])]),A("div",b,[z,A("p",j,[Q(" © "+a(new Date().getFullYear())+" ",1),g(s,{to:"/",class:"border-b-2 border-transparent hover:border-lhs-red"},{default:E(()=>[Q("Love & Hope Studios")]),_:1}),Q(" by "),g(s,{to:r(I).email.href,target:"_blank",class:"border-b-2 border-transparent hover:border-lhs-red"},{default:E(()=>[Q("Ferry Clarence Tan")]),_:1},8,["to"]),Q(". All rights reserved. ")])])])}}},J=""+new URL("little-red.Csuk51Og.png",import.meta.url).href,W=""+new URL("32x32-characters.Cnzm6e40.png",import.meta.url).href,M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAFoBAMAAACbOWs7AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAA////4+Pj/LXQ+JvCvb29zzgqKC6XqQAAAXVJREFUeJzt3NENgjAQAFAdwRVcwRVcgSldgRVcwRVcwchHLyRtrZgCJu8+yNEjef1qWlo4HjaKIxgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDe8GnlD3BYDD47+AGHQwGg7vCp1LhWXpkun2AwWDwxvA503ZP+jll0QUwGAzeI3xI+jVlDSYYDAb3h0O6lKqhT3EDg8HgPcChR0Q/7vPC9bMOBoPBK8ERw/syVh+p62AwGLw6nNOHjFTcJACDweDV4SFl9XFzitzBDDAYDO4P52Z38UatqP8+ZILBYPCXcOtqNKdfEpxbq4LBYHAHuMHMRWx+Lt0aAIPB4MVw8cj+zyYYDAZ3gOvmNLsrjqUNJzHAYDB4TTiWpPHFUa4zS39SAQaDwYvh+jZAxDivgsFg8IZwqz7O28ZGEwwGg3vBDToYDAbvEe4XYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8HgP4dfDh3reJn7zpIAAAAASUVORK5CYII=",Z="data:image/png;base64,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",_="data:image/png;base64,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",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAH0BAMAAACA7ETxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRF////TkU5bFc7NzErPjQhsTA7JSIeJB4XAPVfpwAABEJJREFUeJzt3ctx3EYUQNGmJVtbheAQFIJCcAgOwaEoBIWgEBSCQnAI2sp/1iObD4AaA3QDrJlL37uYmsGn8c6sukiqdFdeXHfXHuD8JBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSIUmEJBGSREgSoZsg3b2dvfv36/3LDz/fv/zze/3Ys9p5g40naWu18wYbT9LWaucNNp6krdXOG2w8SVurnTfYeC+GFEPn+FGQApLM+Bjtw0k6M0lF0jWSVCRdI0nlZkkxahha418+FqRNl6TjSSqSiqQzklQkFUkHe/Wu8fxt1+Lj5o9YJB1KUpH0dPtJ4+5JUpH0dPtJ4+5JUrk2KSdq/Rolt0Gt27p2RfHu7y8XJukffmUhSdMTkoqk0STNTkgqkkZ7MaQff7l/+etzedztLPYpMUJc0trFxGxxLN+1xm8du7QrkrRM0vzRkiSNJmn+aEmS9vT6fX0Xhhw1HhKk2Ke0Jl+cvXxH3rbKlCRJkiRJkiTdOCk0+buUmCNe8m8yFmcXk+eJKI7FFxMrr7qWwz4xY4E/Prav2iOSJEmSpLUkFUmSykFSar59qMfe/LY5+eqJ1CyesdeV6/35qb6Lb7Z+Y5IkSZIkSZKkq5Famixd+aTFHieOJW516L2k1GS5OatJmiTp0tCSZkl6XyRJmj1IUm036bKmdV20GD9JD896OjHbwEyXarlakJWfpDw8ZmtUSUXSYilJzSStXxdJ+n4pSc3+F6S9mv6Lcwu1+g9KktSCRJc0Dwsdm1JSkdRKUveUkoqkVpK6p5RUHoeOH7v89GtjnPmeKduETNY4NqWkIimTdGBKSUVSJunAlDdP6hqw/44FafCSzSQtk1QkDSVpmaQiaShJoxdnz++SNHpxJqlj5Zqk0YszSR0r1ySNXpxJ6li5VknPvBfKJHWsXJM0SVJNUsfKNUmTJNUkdaxckzRJUk1Sx8o1SZMk1SR1rFyTNOnmSblW/4Bn39G/6CxJx58uaSBJx58uaSBJx58uaaCD/3XHLSaJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkghJIiSJkCRCkgi9QNJ/qz/ufMZHu/MAAAAASUVORK5CYII=",AA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwQAAANgBAMAAABgsLKdAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFQTFRFAAAAVmRz4eHhm623cYeWY3iKsbGxQnKFxuruX83kaE9PYy/hQgAACpNJREFUeJzt3W1120oCgGFfCKEQCqVwKRTDQlgMC2ExhEIoXAqlUAp7opyValVyRknsN+553h8+Glsajefpnyr9+OukuL/qBQhBHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0Eegry7JniYj36Gq/hoCPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegrwvSTBt7cCuHiIYnfTmIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyDv6xJMXd6yzz6vCUEegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5X43g4fzlx8vL7r4NbO10yuN8ys+LJzchyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8m5K8HA+3NqKimBgadcKwfDSrhWC4aVdKwTDS7tWCIaXdq0QDC/tWiEYXtq1QjC8tGuFYHhp1wrB8NKu1a0Ill2dvt23l5d/5uHWeTcjeDhf0MPeedcKAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECHYJHvdOWc77ex4+XzxvutuiieDlBcESAgQIECBAgAABAgQIENyAYNnVacueXl4+h+DbPBw4b5Tg+8vL897JVwgBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEBwnWKb6Mb83nbz1M3wELyG4HAIECBAgQIAAAQIECBDcK8G38w8e3j4ZwcsLgq0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBwXYLV7k9fcdqKL0zwOA9v5IAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECAYIVj3OR6v/VOs0T78KwcsLgt0QIECAAAECBAgQIECA4EsS7A6nkx/n+Zbpp0mf56Oty3aHCDau2B0iOByCgRAgQIAAAQIECBAgQLB1xdLf58Ppr40PEHw/v+z5fLi1oQjOr1hC8NEQDITgNQTnVywh+GgIBkLwGoLzK5YQfDQEAyF47U8kuLz7p/m9y3u+UpomGCB4PL/s2/lwS2S1qls6IECAAAECBAgQIECAAAECBKtnCas9//f58F8vLwME/z2/7D/nw5XI0/l7CM6HCD4QgtEQIECAAAECBAgQIECwepaw2vPV5q0eUDyef7D7gGJgUgRzCD4vBKMhQIAAAQIECBAgQIBgtVtbsywtV1wmWD2CuLx5CN6eZQnBkRCMhgABAgQIECBAgAABgtVurfpn472BH9+vGrgHgr0QfCAEoyFAgAABAgQIECBA8EcSbO3+1BbB5VZfe5p04AHF1mWX231scn0HBK8h2AvB+0JwKASvIdgLwftCcCgEryHYC8H7QnConGDrOy1b9tkEu3dDsDHBaeNTBIMhOBQCBAgQIECAAAECBAg+TLDsDII5BIdCgAABAgQIECBAgAABgs8jeNgY7hJMny5fbHeqmxH8PX96mWDp0zAQIECAAAECBAgQIECAAMHdEzxsHP2ch7cgWGa+BcHWVB/EQIAAAQIECBAgQIAAAQIEd0qwtfHTl3ia31vt/tQoweX7HicYmHSXYGrl8H0ens7v9i4MBAgQIECAAAECBAgQIEBwVwS7Gz81Lf3H/OktCFZPC25G8Di/d5o/WJaxOnozBAgQIECAAAECBAgQIEBwBwQDG/+wMdz9yf0y1SjBw/lwIVi1ECyNTr8QTF3+Gf7yPVbDd2EgQIAAAQIECBAgQIAAAYI7IFiW+f18hQ/z0dbJ7/xz7atZVkfL44HdlkckyxWro927jf4J91Xf5g8WjKe3b/n/EPxyDwQbs6yOEMxDBL+G4DwE8wcIEPxyxepo924INmZZHSGYhwh+DcF5fyzBssxVPzdOWREc2v3Lj0Oe5qm2Jlh+TSy/WA49Mth1WBFsfelVY7s/hWA9AYKNIwRHboXgrXv8HoL1BAg2jhAcuRWCt+7xewjWEyDYOEJw5FYI3rrH713tP9WadmEhmL7YwO5vbfzWY47LBKtHC6f55qf52gGH53mqaZYDzxwOhWBzFgTzFad5ltM8FYK3Q3AoBJuzIJivOM2znOapELwdgkMh2JwFwXzFaZ7lNE+F4O0QHOoaBFOHfte+eq4x9bR38vIEYZlvmeB544qp1UOLAYdVV9j9KQT7C1qFYA7BYAhGQ7C/oFUI5hAMhmA0BPsLWoVgDsFgCEa7GsFoW1926tD2fOSya23taAgQIECAAAECBAgQIECAAMGhpm2cfqD+Yz46nQ+P/7PhdQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIci7G4Ld3V+6UwcEeQjyEOQhyEOQhyAPQR6CPAR5d03wY/506wMEnxyCPAR5CPIQ5CHIQ5CHIA9BHoKyZfenBgiW8+7AAUEegjwEeQjyEOQhyEOQhyAPQd69EuyG4BohyEOQhyAPQR6CPAR5CPIQ5CHIW/2D35d39dDJXyIEeQjyEOQhyEOQhyAPQR6CPAR590Dwh4cgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CPAR5CPIQ5CHIQ5CHIA9BHoI8BHkI8hDkIchDkIcgD0EegjwEeQjyEOQhyEOQhyAPQR6CvP8BRrVOnFiiQVkAAAAASUVORK5CYII=",eA=""+new URL("edge-of-the-world.DuOY9UJK.png",import.meta.url).href,gA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAHqCAYAAADLbQ06AAAAAXNSR0IArs4c6QAADNlJREFUeJzt3E2op2d5wOFzZLYRFzWJkkUTUkRiFpqhG0eaTWDUmtZIKoKSD2lkwKLdNfEDsVpdKEQQAgkTMyhIIxhMNBmIC8WZjUxoQe2XB1y0NF+lyGSr83fZis30Hs875/3N/1zX+uZ5n3POMD+ezb17YbO32QEAkl6z9gUAgFcn1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABB2ZO0LwGGy++G7Fj1vc/LUoudNbcvPAVcCL2oACBNqAAgTagAIE2oACBNqAAgTagAIE2oACBNqAAgTagAIs5kMFjDd1PWzR88u+t2bdmbfnW7+2pafA7aJFzUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCE7V7Y7G3WvgRU/dPujWtfIemme9++6HnTTWfT79pgxjbxogaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwm8k4lGwca5luHLPBjMPIixoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDCjqx9AYDpxjE4jLyoASBMqAEgTKgBIEyoASBMqAEgTKgBIEyoASBMqAEgTKgBIMxmMg6ln+5cN5p7y85/XOabAFycFzUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCE2UwGF2GDGbA2L2oACBNqAAgTagAIE2oACBNqAAgTagAIE2oACBNqAAgTagAI272w2dusfQmoenz31kXPs8Fsf2669+2juc3JU5f5JnBwvKgBIEyoASBMqAEgTKgBIEyoASBMqAEgTKgBIEyoASBMqAEgzGYyWIANZvvz053rRnN/sfnB5b0IBHlRA0CYUANAmFADQJhQA0CYUANAmFADQJhQA0CYUANAmFADQJjNZHCADtsGMxvHYP+8qAEgTKgBIEyoASBMqAEgTKgBIEyoASBMqAEgTKgBIEyoASDMZjIIqm8ws3EMDo4XNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AITZTMal+fwnlz3vE59b9rxDZukNZlM2jsHB8aIGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAsCNrX4CI4cax86efWfSzr50O2mD2f5puCJtuMLNxDHq8qAEgTKgBIEyoASBMqAEgTKgBIEyoASBMqAEgTKgBIEyoASBs98Jmb7P2JVjf+Xfcsuh5T+zN5t5742zutcffORu0wQzYMl7UABAm1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAEHZk7QtwZVl64xgAF+dFDQBhQg0AYUINAGFCDQBhQg0AYUINAGFCDQBhQg0AYUINAGE2k227z39ylc9ON5hNfekfPzobvPOFZT+8kp9869q1rwBEeFEDQJhQA0CYUANAmFADQJhQA0CYUANAmFADQJhQA0CYUANAmM1kB2XhDWHnTz8zmlt6Q9jX//zcsgcOXbPweXd88MbR3Le/MfsFTs+buvnOs6M5G8xg+3lRA0CYUANAmFADQJhQA0CYUANAmFADQJhQA0CYUANAmFADQNjuhc3eZu1LXNGGG8emm8SmphvH3jtcmHXHW9bZOHbYXH/L7A/y1jfPznvoQRvMYNt5UQNAmFADQJhQA0CYUANAmFADQJhQA0CYUANAmFADQJhQA0DYkbUvcKU79dXZxrHphrCppc+bbsyCS/HM0fevfQX+l3ee+/u1r8DvwYsaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwmwm26e7nn9uNHfqDbeM5pbeOPbE3rLnwc7OfOPYH9zwxst8k5Y/vu9PR3M/fvi7i5439fTw72aDWYsXNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AITtXtjsbda+BP9jusFs6szf/nLR8zgYb33zbO6hB8+O5n7yrWtHc9ONY+/64n2juekGLvbnD//kbaO5q9802xT39N88PJqzwexgeFEDQJhQA0CYUANAmFADQJhQA0CYUANAmFADQJhQA0CYUANA2JG1L8Bvu+v550ZzN9/5wmjuxHDD1T/882xuaae/9tBo7vg9J7biu4fNdGMW8Oq8qAEgTKgBIEyoASBMqAEgTKgBIEyoASBMqAEgTKgBIEyoASDMZrItt9bGMQCW4UUNAGFCDQBhQg0AYUINAGFCDQBhQg0AYUINAGFCDQBhQg0AYTaTAZfspX/9z7WvAIeGFzUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCE2UwGXLKr3/TG0dxaG8we+sKDo7kT9398K77LdvOiBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDCbyVjV8XtOHKrvbou1No7BYeRFDQBhQg0AYUINAGFCDQBhQg0AYUINAGFCDQBhQg0AYUINAGE2k225Xzy3N5q7/pYbL/NNWh558QOjub+85puX+SYAF+dFDQBhQg0AYUINAGFCDQBhQg0AYUINAGFCDQBhQg0AYUINAGE2k3EonT/9zGjukeM2mAHr8qIGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMJvJ2CqPvDjbJHZ+eN6pr842mB3bed1o7tef+/Lsw/8yG/vr47O5nZ1rp4OLuuMdn1n0vG//aHbeifs/vuh3p5b+7tK/vzMvPbzoeRwML2oACBNqAAgTagAIE2oACBNqAAgTagAIE2oACBNqAAgTagAIs5ks5qknz4zm/u5Ds/Me+Prww88N5xb2/es+teh550/PNok9sTc77+7nf7mP2/yuV155ZTR31VVXLfrdkydPjubeMDxvujHr7LnhgQt/d2q66Wxq6fst/fs7dvS+0dwDOzaYlXhRA0CYUANAmFADQJhQA0CYUANAmFADQJhQA0CYUANAmFADQJjNZDHvuf3YaG6+wWy2gmu8wWxhN//XR0dzZ19496Lffd+//ftobrpJbGlrbTCbWnpj1vi7X3h60fOuue0zs8Fnh989s+z9dm5717LncUXyogaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwm8muUGttMFvLD3e+Mpr77498bDT3vuF377777tHcY489Njyx/d3VTDd/Lb2pa/rdqbXuN/zuWhvl2B8vagAIE2oACBNqAAgTagAIE2oACBNqAAgTagAIE2oACBNqAAizmWzLTTeYbYtHX/7y2le4ov3q0381G/zmwpvEVtro9eKxHy/62WueHQ7Gfy/TfwfTzYeH7f+hpXlRA0CYUANAmFADQJhQA0CYUANAmFADQJhQA0CYUANAmFADQJjNZMAl+84HXh7N/dl0g9nQ937+6UXPO/fzRY/b+d7Od2eDw5/j3X/02X3c5ndN/25TNo4dDC9qAAgTagAIE2oACBNqAAgTagAIE2oACBNqAAgTagAIE2oACNu9sNnbrH0JWMqjJ38wmrvhhhtGc0ePHt3HbToef/zx0dy9H751NPfUk2f2cRvqbBxr8aIGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAsCNrXwC48thcBQfHixoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDCbCaDizh37tzaV7ioo0ePrn0F4DLzogaAMKEGgDChBoAwoQaAMKEGgDChBoAwoQaAMKEGgDChBoCw3Qubvc3al4D/z1NPnln0vJdf/tWi59W9/vXLLiF8z+3HFj0PeHVe1AAQJtQAECbUABAm1AAQJtQAECbUABAm1AAQJtQAECbUABBmMxlbZekNZoeNjWPQ40UNAGFCDQBhQg0AYUINAGFCDQBhQg0AYUINAGFCDQBhQg0AYTaTAUCYFzUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhAk1AIQJNQCECTUAhP0GJmKMPIl6lWsAAAAASUVORK5CYII=",CA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAHgBAMAAAAmoql3AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRF7u7uqIZxil9NZjkxRVWPcJHCrNPx2VdjpitQzqee6wAAAzFJREFUeJzt2+tt2zAYhlF2hKzQFbqCx84KXaEreIXCDCyBCsWKeRtEsc/zQ/io6/ln+PajnLwfXw34V4BpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGkR8KUzXZfltd33wQDbaT7AdpoPsJ3mA2yn+R4W+Gvm6deD5/UCXE4BbAO8B7icAtj2jYAbRy/AToD3AJcDgG2A9x4WWOspe/0OngF4C3AvwAL4FuBepwdebpuXzoH147e6eQ2eAXjbAO4FWAABxwEWQMBxgAUQcBxgAQQcB1gAAccBFkDAcYAFEHDcNwJufpcMeDDAAgg4DrA8D3A3wGGABRBwHGABBBwHWAABxwGWBwZelukAsPZBJeAyAbYB3gNcJsC2MwMvnX29v770/uYyrwRsA7wF2ATYBnjrzMBLi/ndOdpzbK6YUgJ2rgBsH7c5WjoEwJYA2ATYueJzgKut9y5p82uAdd9L57wpJSAgICDgAwB7tmt7Sg/9pz26ufaoEhAQEBDwoYC7mLXr3vJnuwTcC7AT4CjAZQJclqcCbmybxtS1zYve2gEl4C3AvaOABfAtwL2jpwdO1fs0DnAmwDTANMA0wM8IMA0wDTANMA0wDTANMA0wDTDtWYB1cx2fOF19+/S6bHYD3AswDTANMO35gLXe9/1Hv81ZW68AbB93NMB2CTgMsAB+MbD2H5VTthpgG+AiKu0ScBjgKMC2TwRuptrRN1I9PuAtwAL4FmBnqgGWBwHWdpXzHbXVADsBznHeBzjHeR/gHOd9TwqsxcopWw2wDbAzTQXYmaYC7ExTPT2wdhkud5u31QCXAJcAmwCXAJdOD6zNv9TN22qAS4BtgPcAlwDbTg9cG1M/yFoDTG8PmN4eML09YHr7JwB+coBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmAaYBpgGmnB/4FPoxUDmo132EAAAAASUVORK5CYII=",QA="data:image/png;base64,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",tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAEYBAMAAADbs7UXAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAZoM18P9pxeg8////MzMwk7oxmT2uhAAAAR9JREFUeJzt18FNAzEQBdBsEHdKSAmUQqkphRJSQu6IgDRK9Il3NwqKAqx5/7DS2p55t5E9rH4qA4lEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJNIfloanS7sfexKJ9B+l9J+Saq2QSJdMEonUkVRt8rk2h908RyKR+pDSPyXrzbhhkt0MpzFHIpE6klJcv++vp7VCHp7PWjeZGUkkEmnx0tQ9pfo3A2ZqLZkZSSQSiZSMRxKJRFqy1NxTGr2Suqm1JnWpedt+OUIikRYvPb6sji+YW5I3D4lE6kuqaZSD3zJTlpBIpG6khpstvjZnCIlE6kMKd3PGzx0SidSHdK+QSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQi/Y70CUwrSUYsiPROAAAAAElFTkSuQmCC",EA="data:image/png;base64,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",BA={class:"mt-3 grid grid-cols-1 2xl:grid-cols-2 gap-4"},IA=A("div",{class:"grid grid-cols-1 gap-0 2xl:grid-cols-2 2xl:gap-8"},[A("div",{class:"flex items-center"},[A("div",null,[A("h3",{class:"mb-1 text-3xl text-center 2xl:mb-0 2xl:text-left"},"Little Red"),A("img",{src:J,alt:"Little Red",class:"mb-4 block smooth 2xl:hidden"}),A("p",null," Little Red is an enthralling adventure set in a captivating pixelated realm, meticulously crafted using Unity, Pyxel Edit, and Aseprite. In this dynamic 2D platformer, players assume the role of the courageous protagonist, Little Red, wielding a formidable scythe as her weapon of choice. ")])]),A("div",{class:"hidden justify-center items-center 2xl:flex"},[A("img",{src:J,alt:"Little Red",class:"smooth"})])],-1),oA=A("div",{class:"grid grid-cols-2 2xl:grid-cols-4 gap-4"},[A("div",{class:"grid gap-4"},[A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:W,alt:"32 x 32 Characters"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:M,alt:"Rabbit"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:Z,alt:"Family"})])]),A("div",{class:"grid gap-4"},[A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:_,alt:"Desert Eagle"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:$,alt:"Spider"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:AA,alt:"Blue Wing"})])]),A("div",{class:"grid gap-4"},[A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:eA,alt:"Edge of the World"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:gA,alt:"Marshmallows"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:CA,alt:"Health Potion"})])]),A("div",{class:"grid gap-4"},[A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:QA,alt:"Foliage Material"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:tA,alt:"Slime"})]),A("div",null,[A("img",{class:"h-auto max-w-full rounded-lg",src:EA,alt:"Red"})])])],-1),lA={__name:"index",setup(C){return v({title:"Love & Hope Studios - Home"}),(B,I)=>{const o=K,h=L;return e(),t(c,null,[g(o,{id:"about",title:"About","title-class-name":"text-center"},{default:E(()=>[Q(" Welcome to Love & Hope Studios, where we specialize in transforming your dreams into reality. Whether you're envisioning a stunning website that captivates your audience or an immersive gaming experience that leaves players spellbound, we're here to bring your ideas to life. From concept to completion, our dedicated team is committed to crafting bespoke solutions that exceed your expectations. Get ready to embark on a journey where innovation meets creativity, and let us guide you every step of the way. ")]),_:1}),A("div",BA,[g(o,{title:"Mission","title-class-name":"text-center"},{default:E(()=>[Q(" At Love & Hope Studios, our mission is to empower individuals and businesses to achieve their fullest potential through innovative digital solutions. We strive to cultivate meaningful connections, foster creativity, and deliver exceptional results that inspire lasting impact. With a relentless commitment to quality and customer satisfaction, we aim to be the catalyst for realizing dreams and sparking positive change in the digital landscape. ")]),_:1}),g(o,{title:"Vision","title-class-name":"text-center"},{default:E(()=>[Q(" Our vision at Love & Hope Studios is to be recognized as the leading force in digital transformation, setting the standard for excellence and innovation in web and game development. We envision a world where technology is seamlessly integrated into every aspect of life, enhancing experiences, fostering connection, and driving positive social change. Through our unwavering dedication to creativity, integrity, and collaboration, we aspire to shape the future of digital experiences, enriching lives and spreading hope across the globe. ")]),_:1})]),g(o,{id:"projects",title:"Projects","title-class-name":"text-center","class-name":"border-content-orange mt-3"},{default:E(()=>[IA]),_:1}),g(o,{id:"artworks",title:"Artworks","title-class-name":"text-center","class-name":"border-content-orange mt-3"},{default:E(()=>[oA]),_:1}),g(h,{id:"contact"})],64)}}};export{lA as default};
