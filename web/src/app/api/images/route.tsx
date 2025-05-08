import { NextRequest, NextResponse } from 'next/server';

import { ImageResponse } from 'next/og';
import GenericOG from './source/GenericOG';


export async function GET(request: NextRequest) {
//   const currentPage = request.nextUrl.searchParams.get('page');
//   if (!currentPage) {
//     return new NextResponse('Pass in a page as a parameter', { status: 400 });
//   }


    return new ImageResponse((<GenericOG />), { width: 1200, height: 630 });

}