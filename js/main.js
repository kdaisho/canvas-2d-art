const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = 1000;
const height = 1000;
const count = 40;

const lerp = (min, max, t) => {
    return min * (1 - t) + max * t;
};

// const createGrid = count => {
//     const points = [];
//     // const count = 10;
//     for (let x = 0; x < count; x++) {
//         for (let y = 0; y < count; y++) {
//             const u = x / count + 1000;
//             const v = y / (count - 1);
//             points.push([u, v]);
//         }
//     }
//     return points;
// };

// const points = createGrid(count).filter(() => Math.random() > 0.0001);

// const draw = ({ context, width, height, points, count }) => {
//     console.log(context, width, height, points, count);
//     context.fillStyle = "#cc8080";
//     context.fillRect(0, 0, width, height);
//     const margin = width * 0.15;
//     const padding = 20;
//     const tileSize = (width - margin * 2) / count - padding;

//     // const x = lerp(margin, width - margin, u);
//     points.forEach(([u, v]) => {
//         console.log(lerp(margin, width - margin, u));
//         const x = lerp(margin, width - margin, u);
//         const y = lerp(margin, height - margin, v);

//         // context.beginPath();
//         // console.log("TL", x, y);
//         // // context.arc(x, y, tileSize * 12, 0, Math.PI * 2);
//         // context.arc(5, 5, 20, 0, Math.PI * 2);
//         // context.fillStyle = "#fff";
//         // context.fill();
//         context.beginPath();
//         // context.save();
//         context.fillStyle = "#000";
//         // context.font = `${radius * width}px "Helvetica"`;
//         context.font = `25px "Helvetica"`;
//         context.translate(x, y);
//         // context.rotate(rotation);
//         context.fillText("------", 100, 100);

//         context.fill();
//         context.stroke();
//         context.restore();
//     });
// };

// draw({ context, width: 2048, height: 2048, points, count });

function draw() {
    const createGrid = count => {
        const points = [];
        for (let x = 0; x < count; x++) {
            for (let y = 0; y < count; y++) {
                const u = x / (count - 1);
                const v = y / (count - 1);
                points.push([u, v]);
            }
        }
        return points;
    };

    const points = createGrid(count).filter(() => Math.random() > 0.2);
    console.log("POINTS::", points);

    const margin = width * 0.15;
    points.forEach(([u, v], index) => {
        const x = lerp(margin, width - margin, u);
        const y = lerp(margin, height - margin, v);

        console.log(x, y);
        // context.beginPath();
        // const radius = 5;
        // context.arc(x, y, radius, 0, Math.PI * 2, false);
        // context.stroke();

        context.beginPath();
        // context.save();
        context.fillStyle = "#000";
        context.font = `12px "Helvetica"`;
        // context.rotate(10);
        // context.translate(x, y);
        context.fillText("===", x, y);
    });
}

draw();
