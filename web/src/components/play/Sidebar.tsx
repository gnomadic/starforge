
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { cn } from '@/lib/utils';
// import { 
//   GlobeIcon, 
//   Plus, 
//   Brain, 
//   Rocket, 
//   Sparkles, 
//   Swords,
//   Store,
//   Settings
// } from 'lucide-react';
// import { 
//   Sidebar as ShadcnSidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarFooter,
//   SidebarRail
// } from '@/components/ui/sidebar';

// const Sidebar = () => {
//   const location = useLocation();

//   // Define our navigation links
//   const navLinks = [
//     { to: '/', label: 'Home', icon: <GlobeIcon className="h-5 w-5" /> },
//     { to: '/discover',      label: 'Discover',            icon: <Plus className="h-5 w-5" /> },
//     { to: '/manage',        label: 'Manage',            icon: <Settings className="h-5 w-5" /> },
//     { to: '/council',       label: 'Council',             icon: <Brain className="h-5 w-5" /> },
//     { to: '/ventures',      label: 'Ventures',            icon: <Rocket className="h-5 w-5" /> },
//     { to: '/artifacts',     label: 'Artifacts',             icon: <Sparkles className="h-5 w-5" /> },
//     { to: '/combat',        label: 'Combat',            icon: <Swords className="h-5 w-5" /> },
//     { to: '/marketplace',   label: 'Marketplace',             icon: <Store className="h-5 w-5" /> }
//   ];

//   return (
//     <ShadcnSidebar>
//       <SidebarRail />
//       <SidebarHeader className="p-4">
//         <Link to="/" className="font-bold text-lg flex items-center space-x-2">
//           <GlobeIcon className="h-5 w-5 text-primary" />
//           <span>Cosmic Collector</span>
//         </Link>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarMenu>
//           {navLinks.map(link => (
//             <SidebarMenuItem key={link.to}>
//               <SidebarMenuButton 
//                 asChild 
//                 isActive={location.pathname === link.to}
//                 tooltip={link.label}
//               >
//                 <Link to={link.to}>
//                   {link.icon}
//                   <span>{link.label}</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>
//       <SidebarFooter className="p-4 text-xs text-muted-foreground">
//         <div>Cosmic Collector v1.0</div>
//       </SidebarFooter>
//     </ShadcnSidebar>
//   );
// };

// export default Sidebar;
