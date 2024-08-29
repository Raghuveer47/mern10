const  express =require ('express');
const  cors =require ('cors');
const  cookieParser =require ('cookie-parser');

const  mongoose =require ('mongoose');
const app = express();
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect("mongodb+srv://raghuveermustimalla:12112002@cluster0.sm7wh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {



}).then(()=>{
    console.log("DB Connected Suceesfuly")
}).catch(err=>{
    console.log(err)
})





const routes=require("./Routes/routes")
app.use("/api/v1",routes)

app.listen(8081, () => {
    console.log("Running");
});
