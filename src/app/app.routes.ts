import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

/* pestañas hijas de servicios */

/* import { CorteDirectoComponent } from './components/servicios/corte-directo/corte-directo.component';
import { ElaboracionExpedienteComponent } from './components/servicios/elaboracion-expediente/elaboracion-expediente.component';
import { LiquidacionObrasComponent } from './components/servicios/liquidacion-obras/liquidacion-obras.component';
import { PruebaCbrComponent } from './components/servicios/prueba-cbr/prueba-cbr.component';
import { RupturaProvetasComponent } from './components/servicios/ruptura-provetas/ruptura-provetas.component';
import { TriaxialComponent } from './components/servicios/triaxial/triaxial.component'; */


/* consultoria */

import { ConsultoriaComponent } from './components/consultoria/consultoria.component';
import { ArquitecturaComponent } from './components/consultoria/arquitectura/arquitectura.component';
import { EstructuralComponent } from './components/consultoria/estructural/estructural.component';
import { GeotecniaComponent } from './components/consultoria/geotecnia/geotecnia.component';
import { SistemasEInformaticaComponent } from './components/consultoria/sistemas-e-informatica/sistemas-e-informatica.component';

/* RUTAS HIJAS DE CONSULTORIA GEOTECNIA*/
import { EnsayoTriaxialComponent } from './components/consultoria/geotecnia/ensayo-triaxial/ensayo-triaxial.component';
import { CorteDirectoComponent } from './components/consultoria/geotecnia/corte-directo/corte-directo.component';
import { ProctorStandardComponent } from './components/consultoria/geotecnia/proctor-standard/proctor-standard.component';
import { ProctorModificadoComponent } from './components/consultoria/geotecnia/proctor-modificado/proctor-modificado.component';
import { ContenidoHumedadComponent } from './components/consultoria/geotecnia/contenido-humedad/contenido-humedad.component';
import { PesoVolumetricoSueloCohesivoComponent } from './components/consultoria/geotecnia/peso-volumetrico-suelo-cohesivo/peso-volumetrico-suelo-cohesivo.component';
import { AnalisisGranulometricoTamizadoComponent } from './components/consultoria/geotecnia/analisis-granulometrico-tamizado/analisis-granulometrico-tamizado.component';
import { GravedadEspecificaSolidosComponent } from './components/consultoria/geotecnia/gravedad-especifica-solidos/gravedad-especifica-solidos.component';
import { LimiteLiquidoPlasticoIndicePlasticoComponent } from './components/consultoria/geotecnia/limite-liquido-plastico-indice-plastico/limite-liquido-plastico-indice-plastico.component';
import { LimiteContraccionComponent } from './components/consultoria/geotecnia/limite-contraccion/limite-contraccion.component';
import { CbrComponent } from './components/consultoria/geotecnia/cbr/cbr.component';


/* RUTAS DE LOS SERVICIOS */
import { ServiciosGeotecniaComponent } from './components/consultoria/geotecnia/servicios-geotecnia/servicios-geotecnia.component';

import { ServiciosSistemasComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/servicios-sistemas.component';

/* RUTAS HIJA DE CONSULTORIA - SERVICIOS DE SISTEMAS E INFORMATICA */
import { SitioWebComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/sitio-web/sitio-web.component';
import { SoporteTecnicoComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/soporte-tecnico/soporte-tecnico.component';
import { TicComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/tic/tic.component';
import { DesarrolloSoftwareComponent } from './components/consultoria/sistemas-e-informatica/servicios-sistemas/desarrollo-software/desarrollo-software.component';

/* Obras civiles */




import { ObrasCivilesComponent } from './components/obras-civiles/obras-civiles.component';
import { CarreterasComponent } from './components/obras-civiles/carreteras/carreteras.component';
import { EdificacionesComponent } from './components/obras-civiles/edificaciones/edificaciones.component';
import { PuentesComponent } from './components/obras-civiles/puentes/puentes.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'consultoria', component: ConsultoriaComponent,
        children: [
            {path: 'arquitectura', component: ArquitecturaComponent},
            {path: 'estructural', component:EstructuralComponent},
            {path: 'geotecnia', component:GeotecniaComponent},
            {path: 'geotecnia-servicio', component:ServiciosGeotecniaComponent,
            children: [
                {path: 'ensayo-triaxial', component:EnsayoTriaxialComponent},
                {path: 'corte-directo', component:CorteDirectoComponent},
                {path: 'proctor-standard', component:ProctorStandardComponent},
                {path: 'proctor-modificado', component:ProctorModificadoComponent},
                {path: 'contenido-de-humedad', component:ContenidoHumedadComponent},
                {path: 'peso-volumetrico-de-suelo-cohesivo', component:PesoVolumetricoSueloCohesivoComponent},
                {path: 'analisis-granulometrico-por-tamizado', component:AnalisisGranulometricoTamizadoComponent},
                {path: 'gravedad-especifica-de-solidos', component:GravedadEspecificaSolidosComponent},
                {path: 'limite-liquido-limite-plastico-e-indice-plastico', component:LimiteLiquidoPlasticoIndicePlasticoComponent},
                {path: 'limite-de-contraccion', component:LimiteContraccionComponent},
                {path: 'cbr', component:CbrComponent},
                {path: '',  pathMatch: 'prefix', redirectTo: 'ensayo-triaxial'}
                    ]
        },
            {path: 'sistemas-e-informatica', component:SistemasEInformaticaComponent},
            {path: 'sistemas-e-informatica-servicio', component:ServiciosSistemasComponent,
                    children: [
                        {path: 'sitio-web', component:SitioWebComponent},
                        {path: 'soporte-tecnico', component:SoporteTecnicoComponent},
                        {path: 'tecnologia-informacion-conmunicacion', component:TicComponent},
                        {path: 'desarrollo-de-software', component:DesarrolloSoftwareComponent},
                        {path: '',  pathMatch: 'prefix', redirectTo: 'sitio-web'}
                ]
    },
            {path: '',  pathMatch: 'prefix', redirectTo: 'geotecnia'}
        ]
},

    { path: 'obras-civiles', component: ObrasCivilesComponent,
        children: [
            {path: 'puentes', component:PuentesComponent},
            {path: 'carreteras', component:CarreterasComponent},
            {path: 'edificaciones', component:EdificacionesComponent},
            {path: '',  pathMatch: 'prefix', redirectTo: 'puentes'}
        ]
},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES) ;