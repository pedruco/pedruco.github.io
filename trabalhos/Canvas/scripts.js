const canvas = document.getElementById('exemplo');
const ctx = canvas.getContext('2d');        

const centroX = 600;
const centroY = 400;
const orbt_sz = 250;        //raio da órbita da terra
const orbl_sz = 30;         //raio da órbita da lua
const orbl_sz2 = 33;
const orbl_sz3 = 36;
const orbl_sz4 = 39;
const sol_sz = 50;          //tamanho do sol
const lua_sz = 5;           //tamanho da lua
const lua_sz2 = 3; 
const lua_sz3 = 4;
const lua_sz4 = 5;
const terra_sz = 15;        //tamanho da terra

const t_terra = 10;         //tempo em segundos para uma volta da terra
const t_lua = 1;         //tempo em segundos para uma volta da lua
const t_lua2 = 4;
const t_lua3 = 3;
const t_lua4 = 5;

const tau = 2*Math.PI;

const sol = new Path2D();
const lua = new Path2D();
const lua2 = new Path2D();
const lua3 = new Path2D();
const lua4 = new Path2D();
const terra = new Path2D();

function init(){
    sol.arc(0, 0, sol_sz, 0, tau, false);
    lua.arc(0, 0, lua_sz, 0, tau, false);
    lua2.arc(5, 15, lua_sz2, 0, tau, false);
    lua3.arc(10, 30, lua_sz3, 0, tau, false);
    lua4.arc(15, 45, lua_sz4, 0, tau, false);
    terra.arc(0, 0, terra_sz, 0, tau, false);

    window.requestAnimationFrame(draw);
}

function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,1200,800);

    ctx.save();     //salva estado atual antes do desenho;

    //sol;
    ctx.translate(centroX,centroY);
    ctx.fillStyle="orange";
    ctx.fill(sol);
    ctx.restore();

        //terra
        ctx.save();
            ctx.translate(centroX,centroY);

            const time = new Date();

            ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000))*time.getMilliseconds() );
            ctx.translate(orbt_sz, 0);

            ctx.fillStyle = "purple";
            ctx.fill(terra);

            //lua
                ctx.save();

                ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000))*time.getMilliseconds() );
                ctx.translate(0, orbl_sz);

                ctx.fillStyle = "gray";
                ctx.fill(lua);

                ctx.restore();

                ctx.save();

                ctx.rotate((tau/t_lua2) * time.getSeconds() + (tau/(t_lua2*1000))*time.getMilliseconds() );
                ctx.translate(0, orbl_sz2);

                ctx.fillStyle = "red";
                ctx.fill(lua2);

                ctx.restore();
                ctx.save();

                ctx.rotate((tau/t_lua3) * time.getSeconds() + (tau/(t_lua3*1000))*time.getMilliseconds() );
                ctx.translate(0, orbl_sz3);

                ctx.fillStyle = "lightgrey";
                ctx.fill(lua3);

                ctx.restore();
                ctx.save();

                ctx.rotate((tau/t_lua4) * time.getSeconds() + (tau/(t_lua4*1000))*time.getMilliseconds() );
                ctx.translate(0, orbl_sz4);

                ctx.fillStyle = "blue";
                ctx.fill(lua4);

                ctx.restore();


        ctx.restore();

    window.requestAnimationFrame(draw);
}

init();