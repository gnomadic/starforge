// "use client"

// import React from 'react';
// import { Scenario } from '@/domain/types';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Play, Users, Calendar } from 'lucide-react';
// import { formatDistanceToNow } from 'date-fns';

// interface ScenarioListProps {
//     // Define your props here
// }

// const ScenarioList: React.FC<ScenarioListProps> = (props) => {
//     return (
//         <div>
//  <>

            
//             {/* Active Scenario */}
//             {activeScenarioId && (
//               <div className="mb-8 bg-black/30 border border-primary/20 p-4 rounded-lg">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h2 className="text-2xl font-bold flex items-center">
//                       <Badge variant="default" className="mr-2">Active</Badge>
//                       {mockScenarios.find(s => s.id === activeScenarioId)?.title || "Selected Scenario"}
//                     </h2>
//                     <p className="text-white/70">
//                       This scenario is currently active. You can access its content throughout the game.
//                     </p>
//                   </div>
//                   <Button variant="outline" size="sm" onClick={() => setActiveScenarioId(null)}>
//                     Deactivate
//                   </Button>
//                 </div>
//               </div>
//             )}
            
//             {/* Results count */}
//             <div className="mb-4">
//               <p className="text-sm text-white/50">
//                 Showing {filteredScenarios.length} scenarios
//               </p>
//             </div>
            
//             {/* Scenarios Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredScenarios.map(scenario => (
//                 <ScenarioCard
//                   key={scenario.id}
//                   scenario={scenario}
//                   onActivate={handleActivateScenario}
//                   isActive={scenario.id === activeScenarioId}
//                 />
//               ))}
//             </div>
            
//             {filteredScenarios.length === 0 && (
//               <div className="flex flex-col items-center justify-center py-12 text-white/50">
//                 <div className="text-7xl mb-4">🔍</div>
//                 <h3 className="text-xl font-semibold mb-2">No scenarios found</h3>
//                 <p>Try adjusting your search or filters</p>
//               </div>
//             )}
//           </>
//         </div>
//     );
// };

// export default ScenarioList;